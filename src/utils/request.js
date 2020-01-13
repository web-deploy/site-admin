import axios from 'axios';

export const baseUrl = 'http://localhost:7001/api/v1';

// axios的实例及拦截器配置
const request = axios.create({
  baseURL: baseUrl,
});

request.interceptors.response.use((res) => {
  return new Promise((resolve, reject) => {
    const { status, data } = res;

    if (status === 200 || status === 304) {
      resolve(data.data);
    } else {
      reject(res.data);
    }
  })
},
err => {
  console.log(err, '网络错误');
},
);

export default request;
