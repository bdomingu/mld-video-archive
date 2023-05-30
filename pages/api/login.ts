import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';
import connectToDatabase from "./database";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { serialize } from 'cookie';
import axios from "axios";
import fetchVideos from "../../unusedPages/vimeoCourse";



dotenv.config();


const secret = process.env.SECRET_KEY as string;

const setTokenCookieMiddleware = (res: NextApiResponse, token: string) => {
  res.setHeader('Set-Cookie', serialize('protected-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60, 
  }));
};


const login = async (req:NextApiRequest, res:NextApiResponse) => {
 
    if (req.method !== 'POST') {
            return res.status(405).send({message:'Method not allowed'})
    }
    
     const { email, password} = req.body

     if (!email || !password) {
        return res.status(400).send({message: 'Email and password are required.'})
     }
    try{
        const { db } = await connectToDatabase();

        const users = db.collection<any>('users');
        
        const user = await users.findOne({ email });

     if (!user) {
        return res.status(401).send({ message: 'Invalid email or password' });
      }
    
      const passwordMatch = await bcrypt.compare(password, user.password)

      if (!passwordMatch) {
        return res.status(401).send({message: 'Invalid email or password'})
      }

      const token = jwt.sign({ userId: user._id }, secret, {expiresIn: '1h'});
      setTokenCookieMiddleware(res, token);
      console.log(token)
      return res.status(200).json({token, user, message: 'Logged in successfully'})
      

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });

    }

}
export default login;