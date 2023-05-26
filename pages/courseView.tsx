import Layout from '@/components/Layout';
import styles from './courseView.module.css';
import Accordion from '@/components/Accordion';
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import withAuth from "@/components/ProtectedRoute";



const CourseView = () => {
    const [videos, setVideos] =  useState([]);
    const [token, setToken] = useState(Cookies.get('token'));
    const [courseProgress, setCourseProgress] = useState([]);
    const [progressValue, setProgressValue] = useState(0);
    

    useEffect(() => {
        const saveFetchedVideos = async () => {
            try {
                const response = await axios.get("/api/vimeoLibrary", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const videos = await response.data;
                setVideos(videos);
            } catch(error) {
                console.error(error);
            }
        }
        saveFetchedVideos();
    }, [])

    const markCompleted = async (videoId: String) => {
        const body = {
            videoId: videoId,
            completed: true,
        }

        const headers = {
            Authorization: `Bearer ${token}`
        }
        const response = await axios.patch('/api/completedVideos/', body, {headers})
        const completedVideos = response.data;
        console.log(completedVideos)
    }

    useEffect(() => {
        const fetchCourseProgress = async() => {
            const response = await axios.get('/api/courseProgress', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const courseProgress = response.data
            console.log(courseProgress)
            setCourseProgress(courseProgress);
        }
        fetchCourseProgress();
    }, [])
    
    useEffect(() => {
        const setProgress = () => {
            const calculatedProgress = Math.round(courseProgress.length/18 * 100)
            console.log("The array length" + courseProgress.length)
            console.log("The calculation" + calculatedProgress)
            setProgressValue(calculatedProgress)
        }
        setProgress();
    }, [courseProgress]) 

    return (
        <Layout>
            <>
            <div className={styles.textContainer}>
                <h1>My Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem facilisis iaculis pretium 
                    sagittis eget. Sollicitudin feugiat iaculis justo lacus bibendum. Non in 
                    eu est nec laoreet in dignissim scelerisque sagittis. Consectetur nibh fusce 
                    nibh platea et. Odio mattis at faucibus velit. Vitae justo quis ornare vivamus 
                    ornare. Nulla neque massa ultrices non.
                </p>
            </div>
            <div className={styles.progressContainer}>
                <h3>Course Progress: <span>{progressValue}%</span></h3>
            </div>
            <div className={styles.accordionContainer}>
                {videos.map((video: any) => {
                    return (
                        <Accordion key={video.resource_key} title='Title'>
                        <div className={styles.video}>
                            <iframe 
                            src={video.player_embed_url}
                            width= '100%'
                            height= '100%'
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            ></iframe>
                        </div>
                        <div className={styles.videoText}>
                            <h3>Title</h3>
                            <button className={styles.markComplete} onClick={() => markCompleted(video.resource_key)}>Completed</button>
                            <p>Description: Lorem ipsum dolor sit amet consectetur. Lorem facilisis 
                                iaculis pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus
                                bibendum. Non in eu est nec laoreet in dignissim scelerisque sagittis. 
                                Consectetur nibh fusce nibh platea et. Odio mattis at faucibus velit.
                                Vitae justo quis ornare vivamus ornare. Nulla neque massa ultrices non.
                            </p>
                        </div>
                    </Accordion>
                    )
                })}
            </div>
            </>
        </Layout>
    )
}

export default withAuth(CourseView);