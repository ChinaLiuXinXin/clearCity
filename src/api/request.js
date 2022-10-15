import axios from "axios";
// 进度条
import nprogress from "nprogress";
//引入相关进度条的样式
import "nprogress/nprogress.css";
// requests是带cookie的
let requests = axios.create({
    baseURL:'http://218.7.112.123:10001/prod-api/api',
    timeout:5000
})

// admin不带cookie
let admin = axios.create({
    baseURL:"http://218.7.112.123:10001/prod-api/api",
    timeout:5000
})

let api_one = axios.create({
    baseURL:"http://218.7.112.123:10001/prod-api/",
    timeout:5000
})

// 登录注册放行，不进行请求拦截

// 请求拦截器
requests.interceptors.request.use((config) => {
    nprogress.start();
    // 请求时带上token
    let token = localStorage.getItem("token")
    // 判断token是否存在
    if(token != ""){
        config.headers.Authorization = token
    }
    return config;
},(error) => {
    alert(error.message);
    // 终止Promise链
    return new Promise();
})

// 响应拦截器
requests.interceptors.response.use((config) => {
    nprogress.done();
    return config;
},(error) => {
    alter(error.message);
    return new Promise();
})

// 登录注册的拦截器


// 暴露添加新功能后的axios
export {admin,requests,api_one}

