import styles from './Videos.module.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';


export default function Videos() {
    const [videos, setVideos] = useState([])
    const router = useRouter();

    useEffect(() => {

        const fetchVideos = async () => {
            try {
    
                const response = await axios.get("/api/vimeoCourse")
                const videos = await response.data;
                console.log(videos);
                setVideos(videos);
            } catch(error) {
                console.error(error);
            }
        }
        fetchVideos();
    }, [])

    const handleThumbnailClick = (embedUrl: string) => {
        router.push(`/video?embedUrl=${encodeURIComponent(embedUrl)}`)
    }
    
 
    return (
        <div className={styles.container}>
                {/* {videos.map((video: any) =>  {
                    return (
                    <>
                    <div className={styles.card} >
                    <div className={styles.thumbnail}>
                        <img 
                        key={video.resource_key}
                        src={video.pictures.base_link}
                        onClick={() => handleThumbnailClick(video.player_embed_url)}
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Dictum lectus.</p>
                    </div>
                    </div>
                    </>
                    )
                })}     */}
        </div>
    )
}