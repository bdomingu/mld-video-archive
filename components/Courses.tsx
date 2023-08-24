import Link from 'next/link';
import styles from './Courses.module.css';

export default function Courses() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.image}>
            </div>
            <div className={styles.content}>
                <h1>Dark Pass Harem</h1>
                <p>The course so powerful that Teachable had to ban it. Learn how to attract, manage and expand relationships with multiple women simultaneously.</p>
                 <div className={styles.learnMore}>
                <Link href='/courseView'>
                <button>Watch Now</button>
                </Link>
                </div>
            </div>
        </div>
        </> 
    )
}