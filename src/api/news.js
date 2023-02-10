import axios from './index';

export function fetchNews() {
    return axios.get('http://127.0.0.1:3000/article');
}