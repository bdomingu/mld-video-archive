import Layout from "@/components/Layout";
import styles from "./courseView.module.css";
import Accordion from "@/components/Accordion";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import withAuth from "@/components/ProtectedRoute";
import { Loading } from '@nextui-org/react';



const CourseView = () => {
  const [videos, setVideos] = useState([]);
  const [completedVideos, setCompletedVideos] = useState<string[]>([]);
  const [token, setToken] = useState(Cookies.get("token"));
  const [progressValue, setProgressValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    
    const saveFetchedVideos = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/vimeoLibrary", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const videos = await response.data;
        setVideos(videos);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false)
      }
    };
    saveFetchedVideos();
  }, [token]);

  const markCompleted = async (videoId: string) => {
    const body = {
      videoId: videoId,
      completed: true,
    };

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.patch("/api/completedVideos/", body, {
      headers,
    });
    const completedVideos = response.data.updatedVideos;
    setCompletedVideos([...completedVideos, videoId]);

  };

  console.log(completedVideos)
  useEffect(() => {
    const fetchCourseProgress = async () => {
      const response = await axios.get("/api/courseProgress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const courseProgress = response.data;
      const calculatedProgress = Math.round((courseProgress.length / 18) * 100);
      setProgressValue(calculatedProgress);
    };
    fetchCourseProgress();
  }, [token, videos, completedVideos]);

 
  return (
    <Layout>
      <>
        <div className={styles.textContainer}>
          <h1>Dark Pass Harem</h1>
          <p>
            Throughout the ages, men of status have maintained many wives,
            concubines and mistresses. In the digital age, this sort of
            lifestyle is at a man's fingertips, if he cultivates himself and his
            skills sufficiently. Abundance is a choice and you can learn how to
            seduce, indoctrinate and obtain the willing service and subordinance
            of multiple women. This course will teach you how.
          </p>
        </div>
        <div className={styles.progressContainer}>
          <h3>
            Course Progress: <span>{progressValue}%</span>
          </h3>
        </div>
        {isLoading ? (
          <div className={styles.loading}>
            <Loading type="points" size="xl">Loading</Loading>
          </div>
        ) : (
          <div className={styles.accordionContainer}>
          {videos.map((video: any) => {
            const videoName: string = video.name.slice(2).split('_').join(' ');
            return (
              <Accordion key={video.resource_key} title={videoName}>
                <div className={styles.video}>
                  <iframe
                    loading="eager"
                    src={video.player_embed_url}
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className={styles.videoText}>
                  <h3>{video.resource_key}</h3>
                  <p>
                    {video.description}
                  </p>
                  <button
                    className={styles.markComplete}
                    onClick={() => markCompleted(video.resource_key)}
                  >
                    Completed
                  </button>
                </div>
              </Accordion>
            );
          })}
        </div>
        )}
      
      </>
    </Layout>
  );
};

export default withAuth(CourseView);
