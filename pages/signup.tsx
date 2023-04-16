import Layout from "@/components/Layout";
import styles from './signup.module.css'

export default function Signup() {
    return (
        <Layout footerColor="black">
            <div className={styles.container}>
            <div className={styles.signup}>
                <div className={styles.text}>
                <h3>Sign Up For MLD Video Hub</h3>
                </div>
                <div >
                    <form className={styles.form}>
                    <label>Name</label>
                    <input type="text"/>
                    <label>Email</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="text" />
                    <label>Confirm Password</label>
                    <input type="text"/>
                    <div className={styles.checkboxContainer}>
                    <input type="checkbox" />
                    <div className={styles.label}>
                    <label>I agree to the Terms of Use and Privacy Policy</label>
                    </div>
                    </div>
                    <div className={styles.button}>
                    <button>Create Account</button>
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