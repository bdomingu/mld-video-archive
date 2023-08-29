import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import jwt from 'jsonwebtoken';
import sequelize from "./database";
import Member from "./models/Member";


(async () => {
    try {
      await sequelize.authenticate();
      console.log('Connected to MySQL database!');
    } catch (error) {
      console.error('Error connecting to database:', error);
    }
  })();

  const secret = process.env.NEXT_PUBLIC_SECRET_KEY as string;
  console.log('This is the login secret' + secret)

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
        return res.status(405).send({message:"Method not allowed"})
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({message: 'Email and password are required.'})
    }

    try {
        const user = await Member.findOne({
            where: { email },
        });
        
        if (!user) {
            return res.status(400).json({ message: 'Email not registered' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return res.status(401).send({message: 'Invalid email or password'})
        }

        const token = jwt.sign({ userId: user.member_id, admin: user.admin }, secret, {expiresIn: '1h'});
        setTokenCookieMiddleware(res, token);
        return res.status(200).json({token, user, message: 'Logged in successfully'})

    } catch (error) {
      console.log(error)
        return res.status(500).json({ error: 'Internal server error' });
    }
   
}

export default login;