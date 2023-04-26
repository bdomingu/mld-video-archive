import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from "next/router";


config.autoAddCss = false;

interface Props {
    loggedIn: boolean;
}

export default function Nav({ loggedIn }:Props) {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    const handleLogout = async () => {
        const response = await axios.get('api/logout')
        const status = response.status;
        if(status === 200) {
            Cookies.remove('token', { path: '/' })
            router.push('/')
        }

    }

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <div className={styles.logo}>
                <Link href='/'><img src='/images/image8.png' /></Link>
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
               
                {loggedIn ? (
                    <>
                <ul className={showMenu ? styles.menuListActive : styles.menuList}>
                <div className={styles.menu}>
                    <button onClick={handleLogout}><li>Logout</li></button>
                    <Link href='/courseHome'><li>My Courses</li></Link>
                    <Link href='/home'><li>Video Archive</li></Link>

                </div>
                </ul>
                </> 
                ) : (
                    <>
                    <ul className={showMenu ? styles.menuListActive : styles.menuList}>
                    <div className={styles.menu}>
                        <Link href='/login'><li>Login</li></Link>
                        <Link href='/signup'><li>Signup</li></Link>
                    </div>
                    </ul>
                    </>
                )
                }
           
            </div>
            
        </nav>
    )
}