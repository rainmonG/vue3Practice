import axios from "axios";
import { ElMessage } from "element-plus";

// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时
  timeout: 20000
})

const NETWORK_ERROR = '网络错误'

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(
  (res) => {
    const {code, message, data } = res.data;
    if (code === '200') {
      return { code, data, message }
    } else {
      ElMessage.error(message || NETWORK_ERROR)
      return Promise.reject(message || NETWORK_ERROR)
    }
  }
);

function request(options) {
  options.method = options.method || 'get'
  return service(options)
}

export default request