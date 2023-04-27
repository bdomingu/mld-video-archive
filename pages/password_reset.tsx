import { useState } from 'react';
import axios from 'axios';

const resetPassword = () => {
    const [emailAddress, setEmailAddress] = useState('');

    const handleResetRequest = async (e: React.FormEvent<HTMLFormElement>):Promise<void>  => {
        e.preventDefault();
        
        try {
            const data = {
                email:emailAddress
            }

            console.log(data)

            const response = await axios.post('api/resetEmail', data)
            console.log(response);
            console.log('hi')

        } catch (error) {
            console.log(error);
            console.log('hi')
        }

    }

    return (
        <div>
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
        </form>
        </div>
    )
}

export default resetPassword;