import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import authenticateToken from "./authenticate";
import jwt, { JwtPayload } from 'jsonwebtoken';
import connectToDatabase from "./database";
import Video from "./models/Videos";



export default async function fetchVideos(req:NextApiRequest, res:NextApiResponse) {
  const secret = process.env.SECRET_KEY as string;
  try {
    const response = await axios.get('https://api.vimeo.com/me/projects/16080523/videos', {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`, 
      }
    });
    const authHeader = req.headers['authorization'];
    const token: any = authHeader && authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, secret) as JwtPayload; 
    const userId = decodedToken.userId; 
    const videos = response.data.data
   
   try{
    
    const { db } = await connectToDatabase();
    const dbVideos = db.collection('videos');
    const existingVideos = await dbVideos.findOne({ userId });
    // console.log(existingVideos)
    if(existingVideos === null || !existingVideos.userId) {
      videos.forEach((video:any) => {

        const newVideo = new Video({
           userId,
           id: video.resource_key,
           watched: false,
           completed: false,
        })
       newVideo.save()
      })
    }

   } catch(error) {
    console.error
   }
    res.status(response.status).json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}
