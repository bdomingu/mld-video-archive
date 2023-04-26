import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./database";
import User from './models/User';
import bcrypt from 'bcrypt';
import * as Yup from 'yup';

/* Figure out why the database is querying slow. */

const validationSchema = Yup.object().shape({
    name:Yup.string().required(),
    email:Yup.string().email().required(),
    password:Yup.string().min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 
    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
    .required('Password is required'),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password')], 'Passwords must match'), 
});

const register = async (req: NextApiRequest, res:NextApiResponse) => {
    try {
        await connectToDatabase();
        const { name, email, password, confirmPassword } = req.body;

        await validationSchema.validate({name, email, password, confirmPassword})
        
        const hashedPassword = await bcrypt.hash(password, 12)

        if (!name || !email || !password || !confirmPassword) {
          return res.status(400).send({message: 'Please enter all fields'});
        }
      
        if (password !== confirmPassword) {
          return res.status(400).send({ message: 'Passwords do not match'});
        }
      
        const options = { maxTimeMS: 60000 };
        const existingUser = await User.findOne({ email }, null, options);
      
        if (existingUser) {
          return res.status(400).send({ message: 'Email already exists'});
        }
      
      
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