import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8089/api',
    headers: {}
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const data = response.data;
    if(data.code===0){
        return data.data;
    }
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance