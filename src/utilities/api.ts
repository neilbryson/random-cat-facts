import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const SERVER_URL = `${process.env.REACT_APP_SERVER_PROTOCOL}://${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}`;

export function api<T extends unknown = Record<string, unknown>>(
  options: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> {
  const axiosConfig: AxiosRequestConfig = {
    baseURL: SERVER_URL,
    ...options,
  };
  return axios.request(axiosConfig);
}
