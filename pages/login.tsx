import { useState } from 'react';
import axios from 'axios';
import Layout from "@/components/Layout";
import styles from './login.module.css';
import { useRouter } from "next/router";

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
            console.log(registeredUser)
            const response = await axios.post('api/login', registeredUser)
            console.log(response)
            const status = response.status
            if (status === 200){
                router.push('/home')
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
                            type="text"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                            />
                            {error}
                    <div className={styles.button}>
                    <button type='submit'>Login</button>
                    </div>
                     </form>
                     <div className={styles.flex}>
                     <a>Forgot Password?</a>
                     <a>Don&apos;t have an account? Sign Up</a>
                     </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}