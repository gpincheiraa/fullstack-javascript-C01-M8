import axios from 'axios'
import { Auth } from "@/firebase"
// Add a request interceptor
const authMiddleware = () => {
  axios.interceptors.request.use(
  async (config) => {
    const token = await Auth.currentUser?.getIdToken(true)
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
 )
};

export default authMiddleware;
