import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ResetPassword from "./models/ResetPassword";
import dotenv from 'dotenv';
import connectToDatabase from "./database";

dotenv.config();

const secretKey = process.env.RESET_SECRET_KEY as string;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const resetEmail = async (req:NextApiRequest, res:NextApiResponse) => {
 
    try {
        const { email } = req.body;

        if(!email) {
            return res.status(400).send({message: 'Email is required.'})
        }

        const token = jwt.sign({ email }, secretKey, {expiresIn:'1h'});

        await connectToDatabase()
  
        const userEmail = new ResetPassword ({
            email,
            token: bcrypt.hashSync(token, 10),
            createdAt: new Date(),
        });
        console.log(userEmail)
        await userEmail.save();

        const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset_password?token=${token}`;
        const mailOptions = {
            from: process.env.GMAIL_USER as string,
            to: email,
            subject: 'Password reset for mld',
            html: `
              <p>You recently requested to reset your password for your Next.js app account.</p>
              <p>Click the link below to reset your password:</p>
              <a href="${resetUrl}">${resetUrl}</a>
              <p>If you did not request a password reset, please ignore this email.</p>
            `,
        };
      
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Password reset link has been sent to your email' });

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
};

export default resetEmail;