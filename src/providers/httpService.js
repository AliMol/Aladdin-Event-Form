import axios from "axios";


axios.defaults.withCredentials = true

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        console.error(error);
        if (error.config.method === 'put' || error.config.method === 'post')
            console.error("An unexpected error occurrred.");
    }

    return Promise.reject(error);
});
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

const initUrl = "https://script.googleusercontent.com/";
axios.defaults.baseURL = initUrl;


export default {
    initUrl,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    request: axios.request
};
