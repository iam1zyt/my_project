import axios from "axios";

const service = axios.create({
  timeout: 600000,
  baseURL: getDevOrPro(),
});

service.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

function getDevOrPro() {
  if (process.env.NODE_ENV === "production") {
    return "apis"; // 生产环境
  } else {
    return "/api"; // 开发环境
  }
}

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    token && (config.headers.Authorization = tokrn);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error("faile"));
  }
);

export default service;
