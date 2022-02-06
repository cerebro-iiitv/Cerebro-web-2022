import axios from "axios";

const axiosInstance = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
  baseURL: "https://cerebro2022.herokuapp.com/",
=======
  baseURL: process.env.REACT_APP_SERVER_URL,
>>>>>>> 66eaef8 (:art: auth context and axios instance)
=======
  baseURL: "https://cerebro2022.herokuapp.com/",
>>>>>>> 35a46db (connect authorization to server)
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
