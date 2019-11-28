import axios from 'axios';
import Idx from 'idx';

const AxiosInstance = axios.create({
  baseURL: `${process.env.SERVER_URL}/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  // milliseconds * seconds * minutes
  timeout: 1000 * 60 * 2,
});

// Add a request interceptor
AxiosInstance.interceptors.request.use((config) => config, (error) => Promise.reject(error));

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  (response) => response,
  (e) => {
    if (Idx(e, (_) => _.response.data)) {
      const error = {
        code: e.response.status,
        message: e.response.data.message,
      };

      return Promise.reject(error);
    }

    return Promise.reject(e);
  },
);

export default AxiosInstance;
