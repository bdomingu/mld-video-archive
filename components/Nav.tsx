import styles from './Nav.module.css';

export default function Nav() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.navContent}>
                <div className={styles.logo}>
                <img src='/images/image8.png' />
                </div>
                <div className={styles.text}>
                <h2>Modern Life Dating</h2>
                 <h3>Video Archive</h3>
                </div>
            </div>
            
        </div>
    )
}