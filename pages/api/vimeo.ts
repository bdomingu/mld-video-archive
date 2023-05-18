import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  try {
    const response = await axios.get('https://api.vimeo.com/me/projects/16080523/videos', {
      headers: {
        Authorization: `Bearer ${process.env.VIMEO_ACCESS_TOKEN}`, // Replace {access_token} with your actual access token
      },
    });

    res.status(response.status).json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}
