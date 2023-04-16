import styles from './Footer.module.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare} from '@fortawesome/free-brands-svg-icons';


config.autoAddCss = false;

export default function Footer() {
    return (
     <footer className={styles.footerContainer}>
        <div className={styles.footerContent}>
            <div className={styles.logo}>
            <img src='/images/image8.png' />
            </div>
            <div className={styles.copyright}>
                <p>Copyright Modern Life Dating</p>
            </div>
            <div className={styles.socials}>
                <span><FontAwesomeIcon icon={faFacebookSquare} size='2x'></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faTwitterSquare} size='2x'></FontAwesomeIcon></span>
                <span><FontAwesomeIcon icon={faInstagramSquare} size='2x'></FontAwesomeIcon></span>

            </div>
       </div>
        
     </footer>
    )
}