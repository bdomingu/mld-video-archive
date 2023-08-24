import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from 'jsonwebtoken';
import Video from "./models/Videos";




const markComplete = async (req:NextApiRequest, res:NextApiResponse) => {
    const secret = process.env.NEXT_PUBLIC_SECRET_KEY as string;

    if (req.method !== 'PATCH') {
        return res.status(405).send({message:'Method not allowed'})
    }
    try {
    const { videoId, completed } = req.body
    console.log('Video id' + videoId)
    const authHeader = req.headers['authorization'];
    const token: any = authHeader && authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, secret) as JwtPayload; 
    const userId = decodedToken.userId;

    

    const result =  await Video.update(
        {completed: completed},
        {
            where: {
                user_id:userId,
                video_id:videoId
            } 
        }
    );

        
    res.status(200).json({result, message:'video updated'});


    } catch(error) {
        console.error(error);
        res.status(500).json({error: "Error updating tasks"})
    }
}

export default markComplete;
