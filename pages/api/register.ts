import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./database";
import User from './User';

const register = async (req: NextApiRequest, res:NextApiResponse) => {
    try {
        await connectToDatabase();
        const { name, email, password, confirmPassword } = req.body;

        if (!name || !email || !password || !confirmPassword) {
          return res.status(400).send({message: 'Please enter all fields'});
        }
      
        if (password !== confirmPassword) {
          return res.status(400).send({ message: 'Passwords do not match'});
        }
      
        const existingUser = await User.findOne({ email });
      
        if (existingUser) {
          return res.status(400).send({ message: 'Email already exists'});
        }
      
        const hashedPassword = await User.hashPassword(password);
      
        const user = new User({
          name, 
          email,
          password: hashedPassword,
        });
      
        await user.save();
      
        res.status(201).send({ message: 'User registered successfully'});
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      } 
    
}

export default register;