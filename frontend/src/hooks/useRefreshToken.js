import useAuth from "./useAuth";
import { axiosPrivate } from "../api/axios";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const url = "/api/users/refresh";
      const response = await axiosPrivate.get(url);
      setAuth((prev) => {
        console.log("prev ::::::::" + JSON.stringify(prev));
        console.log("Acesstkn :::::::" + response.data.accessToken);
        return { ...prev, accessToken: response.data.accessToken };
      });
      return response.data.accessToken;
    } catch (error) {
      console.log(error);
    }
  };
  return refresh;
};

export default useRefreshToken;
