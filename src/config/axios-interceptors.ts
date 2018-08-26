import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { API_PATH } from '../utils/constUrls';

const TIMEOUT = 10000;
const setupAxiosInterceptors = () => {
  const onRequestSuccess = (config: AxiosRequestConfig) => {
    config.timeout = TIMEOUT;
    config.url = `${API_PATH}${config.url}`;
    return config;
  };
  const onResponseSuccess = (response: AxiosResponse) => response;
  const onResponseError = (error: AxiosError) => {
    return Promise.reject(error);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
