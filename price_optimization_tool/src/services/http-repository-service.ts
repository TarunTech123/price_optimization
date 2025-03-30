import axios from 'axios';

import { ApiBaseURL, urlPrefix } from '../utils/constants/constants';

export const HttpService = axios.create({
    withCredentials: false,
    baseURL: ApiBaseURL,
});

function decodeToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

HttpService.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = decodeToken(token);
            const expirationTime = decodedToken.exp;
            const currentTime = Math.floor(Date.now() / 1000); // convert to seconds

            if (currentTime < expirationTime) {
                config.headers['Authorization'] = 'Bearer ' + token;
                config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
                config.headers['Pragma'] = 'no-cache';
                config.headers['Expires'] = '0';
                return config;
            }
            else {
                window.location.replace(urlPrefix);
            }

            return Promise.reject({ response: { status: 401 } });
        }

        return config;
    },
    (error) => {

        return Promise.reject(error);
    }
);

HttpService.interceptors.response.use(
    (response) => {
        response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
        response.headers['Pragma'] = 'no-cache';
        response.headers['Expires'] = '0';
        return response;
    },
    (error) => {
        alert('Oops!')
        return Promise.reject(error);
    }
);