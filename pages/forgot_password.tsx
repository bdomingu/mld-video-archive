import { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleResetRequest = async (e: React.FormEvent<HTMLFormElement>):Promise<void>  => {
        e.preventDefault();
        
        try {
            const data = {
                email:emailAddress
            }
            const response = await axios.post('api/resetEmail', data)
            const status = response.status
            if (status === 200) {
                setSuccess(true);
            }

        } catch (error: any) {
            setError(error.response.data.message)
        }

    }

    return (
        <div>
            {success ? (
            <>
            <p>Check your email for a link to reset your password. If it doesn&apos;t appear 
                within a few minutes, check your spam folder.</p> 
            </> ) : (
                <>
                 <p>Enter your user account's email address and we will send you a password
                 reset link.</p>
                <form  onSubmit={(e) => void handleResetRequest(e)}>
                 <input
                placeholder="Enter your email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                name="emailAddress"
                />
            <button type='submit'>Send</button>
            <p>{error}</p>
            </form>
                </>
            )}
       
        </div>
    )
}

export default ResetPassword;