import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cerebro2022.herokuapp.com/",
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
