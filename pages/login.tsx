import Layout from "@/components/Layout";
import styles from './login.module.css'

export default function Login() {
    
    return (
        <Layout>
            <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.text}>
                <h3>Login to MLD Video Hub</h3>
                </div>
                <div >
                    <form className={styles.form}>
                    <label>Email address</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="text" />
                    <div className={styles.button}>
                    <button>Login</button>
                    </div>
                     </form>
                     <div className={styles.flex}>
                     <a>Forgot Password?</a>
                     <a>Don't have an account? Sign Up</a>
                     </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}