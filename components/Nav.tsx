import { useState } from 'react';
import styles from './Nav.module.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false;

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <div className={styles.logo}>
                <img src='/images/image8.png' />
                </div>
                <div className={styles.text}>
                <h2>Modern Life Dating</h2>
                 <h3>Video Archive</h3>
                </div>
               
                <button className={styles.menuButton} onClick={handleClick}>
                    <div className={styles.hamburgerIcon}>
                        <span><FontAwesomeIcon icon={faBars} size='2x'></FontAwesomeIcon></span>
                           
                        
                    </div>
                </button>
                <ul className={showMenu ? styles.menuListActive : styles.menuList}>
                <div className={styles.menu}>
                    <li>Login</li>
                    <li>Signup</li>
                </div>
                </ul>
            </div>
            
        </nav>
    )
}