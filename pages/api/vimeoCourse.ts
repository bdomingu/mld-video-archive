import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import authenticateToken from "./authenticate";

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  
const fetchVideos = async () => {
    try {
    const response = await axios.get('https://api.vimeo.com/me/projects/', {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`, 
      }
    });

    return res.status(response.status).json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}
fetchVideos();
}
