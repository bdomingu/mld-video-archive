import Layout from "@/components/Layout";
import styles from "./courseHome.module.css";
import Courses from "../components/Courses";
import withAuth from "@/components/ProtectedRoute";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Loading from "@/components/Loading";

const CourseHome = () => {
  const router = useRouter();
  const [user, setUser] = useState<string | undefined>(); 
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    setUser(Cookies.get('user'))
  }, [])

  useEffect(() => {
    const jwt = Cookies.get('token');
    if (!jwt) {
      router.replace('/'); 
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [router]);


  const splitName = (user: string) => {
    const userName = user.split(' ')
    if (userName[0].endsWith('s')) {
      return <>{userName[0]}'</>;
    } else {
      return <>{userName[0]}'s</>;
    }
    
  }

 
  return (
    <Layout>
      {isLoading ? (
        <Loading/>
      ): (
        <><div className={styles.textContainer}>

            <h1>{splitName(user || '')} MLD Courses</h1>

            <p>
              In this digital age, it's crucial to know how to present yourself
              attractively online, decode and reciprocate non-verbal cues
              accurately, and delve into the psychological intricacies of the women
              you're interested in.
            </p>
          </div><div className={styles.courseContainer}>
              <Courses />
            </div></>
      )}
  
    </Layout>
  );
};

export default CourseHome;
