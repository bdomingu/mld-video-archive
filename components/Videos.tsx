import styles from './Videos.module.css';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Videos() {
    const [videos, setVideos] = useState([])

    useEffect(() => {

        const fetchVideos = async () => {
            try {
    
                const response = await axios.get("/api/vimeo")
                const videos = await response.data;
                console.log(videos);
                setVideos(videos);
            } catch(error) {
                console.error(error);
            }
        }
        fetchVideos();
    }, [])
    
 
    return (
        <div className={styles.container}>
                <div>
                <div className={styles.thumbnail}>
                {videos.map((video: any) => {
                return (
                    <>
                    <iframe src={video.player_embed_url}></iframe>
                    </>
                )
                })}
                </div>
                <div className={styles.content}>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Dictum lectus.</p>
                </div>
                </div>
                
               
                <div>
                <div className={styles.thumbnail}>
                </div>
                <div className={styles.content}>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Dictum lectus.</p>
                </div>
                </div>
               
                <div>
                <div className={styles.thumbnail}>
                </div>
                <div className={styles.content}>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Dictum lectus.</p>
                </div>
                </div>

                <div>
                <div className={styles.thumbnail}>
                </div>
                <div className={styles.content}>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Dictum lectus.</p>
                </div>
                </div>

                <div>
                <div className={styles.thumbnail}>
                </div>
                <div className={styles.content}>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Dictum lectus.</p>
                </div>
                </div>

                <div>
                <div className={styles.thumbnail}>
                </div>
                <div className={styles.content}>
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Dictum lectus.</p>
                </div>
                </div>
                
           
        </div>
    )
}