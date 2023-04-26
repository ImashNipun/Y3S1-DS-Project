import useAuth from './useAuth';
import axios from "axios";

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        try {

            const response = await axios.get('http://localhost:5005/api/users/refresh');
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        return response.data.accessToken;
            
        } catch (error) {
            console.log(error);
        }
        
    }
    return refresh;
};

export default useRefreshToken;