import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Video from "./models/Videos";



export default async function fetchVideos(req:NextApiRequest, res:NextApiResponse) {
  const secret = process.env.NEXT_PUBLIC_SECRET_KEY as string;

  try {
    const response = await axios.get('https://api.vimeo.com/me/projects/17319265/videos?sort=alphabetical&fields=name,player_embed_url,resource_key', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN}`, 
      }
    });
    const authHeader = req.headers['authorization'];
    const token: any = authHeader && authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, secret) as JwtPayload; 
    const userId = decodedToken.userId; 
    const videos = response.data.data
   
   try{
    await Video.sync()

    const existingVideos = await Video.findOne({ where: { user_id: userId } });
    if(existingVideos === null || !existingVideos.user_id) {
      videos.forEach((video:any) => {

        const newVideo = new Video({
           user_id: userId,
           video_id: video.resource_key,
           name: video.name,
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
    console.error(error)
    res.status(500).json({ error: 'An error occurred' });
  }
}
