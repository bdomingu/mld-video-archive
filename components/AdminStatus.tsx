import Cookies from 'js-cookie';
import axios from 'axios';

const fetchAdminStatus = async () => {
    const token = Cookies.get("token"); 
    try {
        await axios.get(`/api/verifyAdmin?token=${token}`);
        return true; 
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            return false;
        }
        console.error('Error checking admin status:', error);
        return false; 
    }
};

export default fetchAdminStatus;