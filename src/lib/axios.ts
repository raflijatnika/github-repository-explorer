import axios from "axios";

const useAxiosInstance = () => {
  const baseURL: string | undefined = process.env.REACT_APP_API_URL;

  const instance = axios.create({
    baseURL,
  });

  return instance;
};

export default useAxiosInstance;