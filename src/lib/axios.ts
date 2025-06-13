import axios from "axios";

const useAxiosInstance = () => {
  const baseURL: string | undefined = import.meta.env.VITE_API_URL ?? '';

  const instance = axios.create({
    baseURL,
  });

  return instance;
};

export default useAxiosInstance;