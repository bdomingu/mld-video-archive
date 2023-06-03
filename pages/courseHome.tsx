import Layout from "@/components/Layout";
import styles from "./courseHome.module.css";
import Courses from "../components/Courses";
import withAuth from "@/components/ProtectedRoute";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const CourseHome = () => {
  const router = useRouter();
  const [user, setUser] = useState<string | undefined>(); 
 
  useEffect(() => {
    setUser(Cookies.get('user'))
  }, [])

  useEffect(() => {
    const jwt = Cookies.get('token');
    if (!jwt) {
      router.replace('/'); 
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
      <div className={styles.textContainer}>
        
          <h1>{splitName(user || '')} Courses</h1>
       
        <p>
          In this digital age, it's crucial to know how to present yourself
          attractively online, decode and reciprocate non-verbal cues
          accurately, and delve into the psychological intricacies of the women
          you're interested in.
        </p>
      </div>
      <div className={styles.courseContainer}>
        <Courses />
      </div>
    </Layout>
  );
};

export default withAuth(CourseHome);
