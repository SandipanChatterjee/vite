import axios from "axios";

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Replace with your API base URL
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config before request is sent
    // For example, add an Authorization header
    const token = import.meta.env.VITE_PEXELS_API_KEY; // Replace with your token
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lies within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
      console.error("Unauthorized, redirecting to login...");
      // Redirect to login or handle accordingly
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
