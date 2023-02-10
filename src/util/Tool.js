// 一个模块只能有一个默认defalut导出，但可以有多个命名导出
import moment from 'moment';
import axios from 'axios';
const instance = axios.create()
export function dateFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {  //转换时间
    return moment(date).format(format);
}
export function unixFormat(unix, format = 'YYYY-MM-DD HH:mm:ss') {  //转换时间戳
    return moment.unix(unix).format(format);
}

//封装不需要经过请求拦截器和响应拦截器的get和post请求
export function httpGet(url) {
    return instance.get(url);
}

export function httpPost(url) {
    return instance.post(url);
}
