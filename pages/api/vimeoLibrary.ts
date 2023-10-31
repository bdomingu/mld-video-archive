import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Video from "./models/Videos";
import NodeCache from 'node-cache';


const cache = new NodeCache({ stdTTL: 14400 }); 

export default async function fetchVideos(req:NextApiRequest, res:NextApiResponse) {
  const secret = process.env.NEXT_PUBLIC_SECRET_KEY as string;
  const url = 'https://api.vimeo.com/me/projects/16080523/videos' 

  try {
    const cachedVideos = cache.get(url);
    if(cachedVideos) {
      console.log('Cache hit - fetching data from cache...');
      res.status(200).json(cachedVideos);
      return;
    }

    console.log('Cache miss - fetching videos from API...')
    const response = await axios.get(`${url}?sort=alphabetical&fields=name,player_embed_url,resource_key`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN}`, 
      }
    });
    const authHeader = req.headers['authorization'];
    const token: any = authHeader && authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, secret) as JwtPayload; 
    const userId = decodedToken.userId; 
    const videos = response.data.data

    cache.set(url, videos);
   
   try{

    const existingVideos = await Video.findOne({ where: { member_id: userId } });
    if(existingVideos === null || !existingVideos.member_id) {
      videos.forEach((video:any) => {

        const newVideo = new Video({
           member_id: userId,
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
