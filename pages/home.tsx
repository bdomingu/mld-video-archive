import Layout from "@/components/Layout";
import styles from './home.module.css';
import Link from "next/link";
import Videos from '../components/Videos';
import withAuth from "@/components/ProtectedRoute";


 const Home = () => {
   

    return (
        <Layout>
            <div className={styles.textContainer}>
                <h1>My Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem facilisis iaculis 
                 pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus 
                bibendum. Non in eu est nec laoreet in dignissim.</p>
            </div>
            <div className={styles.videoContainer}>
                <div className={styles.years}>
                    <Link href='/videos'><li>2023</li></Link>
                    <li>2022</li>
                    <li>2021</li>
                    <li>2020</li>
                    <li>2019</li>
                </div>
                <div className={styles.line}></div>
                <div className={styles.quarters}>
                    <li>Q1</li>
                    <li>Q2</li>
                    <li>Q3</li>
                    <li>Q4</li>
                </div>
                <Videos />
            </div>
        </Layout>
       
    )
 
}

export default withAuth(Home);
