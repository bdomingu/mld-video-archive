import Layout from "@/components/Layout";
import styles from './signup.module.css'
import axios from 'axios';
import { useState } from "react";

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const handleRegister = async (e: React.FormEvent<HTMLFormElement>):Promise<void> => {
        e.preventDefault();
        try {
        const user = {
            name: name, 
            email: email, 
            password: password,
            confirmPassword: confirmPassword
        }

        const response = await axios.post('api/register', user)
        console.log(response)

    } catch (error:any) {
          setError(error.response.data.message);
    }
}


    return (
        <Layout footerColor="black">
            <div className={styles.container}>
            <div className={styles.signup}>
                <div className={styles.text}>
                <h3>Sign Up For MLD Video Hub</h3>
                </div>
                <div >
                    <form className={styles.form} onSubmit={(e) => void handleRegister(e)}>
                        <label>Name</label>
                            <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        <label>Email</label>
                            <input 
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <label>Password</label>
                            <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        <label>Confirm Password</label>
                            <input 
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {error}
                    <div className={styles.checkboxContainer}>
                    <input type="checkbox" />
                    <div className={styles.label}>
                    <label>I agree to the Terms of Use and Privacy Policy</label>
                    </div>
                    </div>
                    <div className={styles.button}>
                    <button type="submit">Create Account</button>
                    </div>
                     </form>
                     <div className={styles.flex}>
                     <a>Already have an account? Login</a>
                     </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}