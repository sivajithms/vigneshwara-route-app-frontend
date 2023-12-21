import axios, { AxiosError, AxiosResponse } from 'axios';
// import { getAccessToken } from '../Storage/TokenStorage';
import { URL } from './DefaultURL';

export const api = axios.create();
api.defaults.baseURL = URL.Web_url;

function onError(response) {
    return response.response?.data;
}

function onSuccess(response) {
    return response.data;
}

export const Services = {
    signIn: (data) => api.post("/auth/signup", data).then(onSuccess, onError)
};

//Logs
api.interceptors.request.use(
    request => {
        console.log(request.url, "----- request ----->", request.data)
        return request
    },
)
api.interceptors.response.use(
    response => {
        console.log(response.config.url, "+++++ response +++++>", response.data);
        return response
    },
)