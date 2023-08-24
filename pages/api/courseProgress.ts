import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from 'jsonwebtoken';
import Video from './models/Videos';




const courseProgress = async (req:NextApiRequest, res:NextApiResponse) => {
    const secret = process.env.NEXT_PUBLIC_SECRET_KEY as string;

    if (req.method !== 'GET') {
        return res.status(405).send({message:'Method not allowed'})
    }
    try{
    const authHeader = req.headers['authorization'];
    const token: any = authHeader && authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, secret) as JwtPayload; 
    const userId = decodedToken.userId; 
    
    const result =  await Video.findAll({
        where: {
            user_id: userId,
            completed: true
        }
        
    });
    res.status(200).json(result);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "Error updating tasks"})
    }
}

export default courseProgress;
