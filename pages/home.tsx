import Layout from "@/components/Layout";
import styles from './home.module.css';
import Link from "next/link";
import Videos from '../components/Videos';

export default function Home() {
    return (
        <Layout>
            <div className={styles.textContainer}>
                <h1>Lorem Ipsum Dolor Sit Amet</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem facilisis iaculis
                pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus bibendum. 
                Non in eu est nec laoreet in dignissim scelerisque sagittis. Consectetur nibh 
                fusce nibh platea et. Odio mattis at faucibus velit. Vitae justo quis ornare 
                vivamus ornare. Nulla neque massa ultrices non.</p>
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
                <Videos/>
            </div>
        </Layout>
    )
 
}