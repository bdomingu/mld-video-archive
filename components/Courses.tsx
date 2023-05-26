import Link from 'next/link';
import styles from './Courses.module.css';

export default function Courses() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.image}>

            </div>
            <div className={styles.content}>
                <h1>TITLE H2</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem facilisis iaculis 
                pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus bibendum.
                 Non in eu est nec laoreet in dignissim</p>
                 <div className={styles.learnMore}>
                <Link href='/courseView' passHref>
                <button>Learn Now</button>
                </Link>
                </div>
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.image}>

            </div>
            <div className={styles.content}>
                <h1>TITLE H2</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem facilisis iaculis 
                pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus bibendum.
                 Non in eu est nec laoreet in dignissim</p>
                 <div className={styles.learnMore}>
                <button>Learn Now</button>
                </div>
            </div>

        </div>
        <div className={styles.container}>
            <div className={styles.image}>

            </div>
            <div className={styles.content}>
                <h1>TITLE H2</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem facilisis iaculis 
                pretium sagittis eget. Sollicitudin feugiat iaculis justo lacus bibendum.
                 Non in eu est nec laoreet in dignissim</p>
                 <div className={styles.learnMore}>
                <button>Learn Now</button>
                </div>
            </div>
        </div>
        </> 
    )
}