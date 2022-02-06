import axios from "axios";

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: "https://cerebro2022.herokuapp.com/",
=======
  baseURL: process.env.REACT_APP_SERVER_URL,
>>>>>>> 66eaef8 (:art: auth context and axios instance)
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: Refresh token
    return Promise.reject(error);
  }
);

export default axiosInstance;
