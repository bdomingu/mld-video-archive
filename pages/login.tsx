import { useState } from 'react';
import axios from 'axios';
import Layout from "@/components/Layout";
import styles from './login.module.css';
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import Link from 'next/link';


export default function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();


    const handleLogin = async (e: React.FormEvent<HTMLFormElement>):Promise<void>  => {
        e.preventDefault();
        
        try {
            const registeredUser = {
                email: userEmail,
                password: userPassword
            }
           
            const response = await axios.post('api/login', registeredUser)
            
            const token = await response.data.token
            const user = await response.data.user.name
            
            const expirationDate = new Date(Date.now() + 60 * 60 * 1000); 
            Cookies.set('token', token, {expires: expirationDate, path: '/'});
            Cookies.set('user', user, {expires: expirationDate, path: '/'});
            const status = response.status
            if (status === 200){
                router.push('/courseHome')
            }
        } catch (error:any) {
            setError(error.response.data.message);
        }

    }


    return (
        <Layout footerColor="black">
            <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.text}>
                <h3>Login to MLD Video Hub</h3>
                </div>
                <div >
                    <form className={styles.form} onSubmit={(e) => void handleLogin(e)}>
                        <label>Email address</label>
                            <input 
                            type="text"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            />
                        <label>Password</label>
                            <input 
                            type="password"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            />
                            {error}
                    <div className={styles.button}>
                    <button type='submit'>Login</button>
                    </div>
                     </form>
                     <div className={styles.flex}>
                     <Link href='/forgot_password'>Forgot Password?</Link>
                     {/* <Link href='/signup'>Don&apos;t have an account? Sign Up</Link> */}
                     </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}