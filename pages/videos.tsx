import { useRouter } from "next/router";
import styles from './videos.module.css'

export default function Videos() {
    const router = useRouter();
    const { year, quarter } = router.query;

    return (
        <div className={styles.container}>

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