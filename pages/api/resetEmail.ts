import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ResetPassword from "./models/ResetPassword";
import AWS from 'aws-sdk';
import dotenv from 'dotenv'

/* figure out why im getting a 500 error */
dotenv.config();

const secretKey = process.env.RESET_SECRET_KEY as string;


const ses = new AWS.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const resetEmail = async (req:NextApiRequest, res:NextApiResponse) => {
    try {
        const { email } = req.body;
        console.log(email)
        if(!email) {
            return res.status(400).send({message: 'Email is required.'})
        }

        const token = jwt.sign({ email }, secretKey, {expiresIn:'1h'});

        await ResetPassword.create({
            email,
            token: bcrypt.hashSync(token, 10),
        });

        const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`;
        const mailOptions = {
            from: process.env.SES_EMAIL_ADDRESS as string,
            to: email,
            subject: 'Password reset for mld',
            html: `
              <p>You recently requested to reset your password for your Next.js app account.</p>
              <p>Click the link below to reset your password:</p>
              <a href="${resetUrl}">${resetUrl}</a>
              <p>If you did not request a password reset, please ignore this email.</p>
            `,
        };
      
        const sendEmailResult = await ses.sendEmail({
            Destination: {
                ToAddresses: [email],
            },
            Message: {
                Body: {
                  Html: {
                    Charset: 'UTF-8',
                    Data: mailOptions.html,
                  },
                },
                Subject: {
                  Charset: 'UTF-8',
                  Data: mailOptions.subject,
                },
              },
              Source: mailOptions.from,
        }).promise();
          
        console.log(`Email sent: ${sendEmailResult.MessageId}`);

        res.status(200).json({ message: 'Password reset link has been sent to your email' });

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

export default resetEmail;