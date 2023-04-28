import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { token } = router.query
    

    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>):Promise<void> => {

        e.preventDefault();
        try{
            const data = {
                password: newPassword,
                confirmPassword: confirmPassword,
                token: token
             }
             const response = await axios.post('api/resetPassword', data)
             const status = response.status
             if (status === 200) {
                router.push('/login')
             }
        } catch (error: any) {
            setError(error.response.data.message)
        }

    }

    return (
        <div>
            <form onSubmit={(e) => void handleResetPassword(e)}>
                <label>Password</label>
                    <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                <label>Confirm Password</label>
                    <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                <p>Make sure it's at least 8 characters including an uppercase letter, a lowercase
                letter, one number, and one special character.</p>
                <p>{error}</p>
                <button type="submit">Change Password</button>
            </form>
        </div>
    )
}

export default ResetPasswordPage;