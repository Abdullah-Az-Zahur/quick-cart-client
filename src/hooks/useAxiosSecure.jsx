import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate;

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          signOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, signOut]);

  return axiosSecure;
};

export default useAxiosSecure;
