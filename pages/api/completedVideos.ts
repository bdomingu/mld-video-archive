import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "./database";
import jwt, { JwtPayload } from 'jsonwebtoken';




const markComplete = async (req:NextApiRequest, res:NextApiResponse) => {
    const secret = process.env.SECRET_KEY as string;
    if (req.method !== 'PATCH') {
        return res.status(405).send({message:'Method not allowed'})
    }
    try {
    const { videoId, completed } = req.body
    const authHeader = req.headers['authorization'];
    const token: any = authHeader && authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, secret) as JwtPayload; 
    const userId = decodedToken.userId;
    console.log(userId)

    const { db } = await connectToDatabase();
    const videos = db.collection('videos');

    const result =  await videos.updateOne(
        {userId: `${userId}`, id: `${videoId}`},
        {$set: {completed: completed} }
    )

    res.status(200).json(result);
    } catch(error) {
        console.error(error);
        res.status(500).json({error: "Error updating tasks"})
    }
}

export default markComplete;
