import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

interface CustomNextApiRequest extends NextApiRequest {
    user: any; 
}
const authenticateToken = (req:CustomNextApiRequest, res:NextApiResponse, next:any) => {
    const secret = process.env.NEXT_PUBLIC_SECRET_KEY as string;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token === null) return res.send(401);

    jwt.verify(token || '', secret, (err, user) => {
        if (err) return res.send(403);
        req.user = user;
       
        next();
    });
}   

export default authenticateToken