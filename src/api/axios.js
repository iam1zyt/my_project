import axios from "axios";
import router from "@/router";
import { Message } from "iview";

const service = axios.create({
  timeout: 600000,
  baseURL: getDevOrPro(),
});

service.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

function getDevOrPro() {
  if (process.env.NODE_ENV === "production") {
    return "apis"; // 生产环境
  } else {
    return "/api"; // 开发环境
  }
}

// 请求拦截
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// 响应拦截
service.interceptors.response.use(
  (response) => {
    const responseCode = response.status;
    if (!Object.keys(response.data).includes("success")) {
      return Promise.resolve(response);
    } else {
      if (responseCode === 200) {
        return Promise.resolve(response.data);
      } else {
        response.data.msg &&
          Message.err({
            content: response.data.msg,
            duration: 3,
          });
        return Promise.reject(response);
      }
    }
    // return Promise.reject(response);

  },
  (error) => {
    if (!error.response) {
      if (error.message.includes("timeout")) {
        Message, error("请求超时！");
      } else {
        Message.error("断网！");
      }
      return;
    }
    const responseCode = error.response.status;
    let msg = error.response.data && error.response.data.msg;
    switch (responseCode) {
      case 400:
        Message.error(msg || "参数错误");
        break;
      case 401:
        Message.error({
          content: "无访问权限，请检查权限或者重新登陆",
          duration: 1,
          onClose: () => {
            localStorage.clear();
            router.push({ name: "login" });
          },
        });
        break;
      case 403:
        Message.error({
          content: "登录超时，请重新登录",
          duration: 1,
          onClose: () => {
            localStorage.clear();
            router.push({ name: "login" });
          },
        });
        break;
      case 404:
        Message.error(msg || "网络请求不存在");
        break;
      case 405:
        Message.error(msg || "请求方式错误");
      case 500:
        Message.error(msf || "服务器错误");
      case 502:
        Message.error({
          content: "服务器未正常响应",
          duration: 1,
          onClose: () => {
            localStorage.clear(), router.push({ name: "login" });
          },
        });
        break;
      case 504:
        Message.error(msg || "请求超时");
        break;
      case 776:
        if (error.response.config.url === "/login") {
          Message.error({
            content: "用户名/密码无效",
            duration: 1,
            onClose: () => {
              localStorage.clear();
              router.push({ name: "login" });
            },
          });
        } else {
          Message.error({
            content: "请登录！",
            duration: 1,
            onClose: () => {
              localStorage.clear();
              router.push({ name: "login" });
            },
          });
        }
        break;
      default:
        Message.error(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

export default service;
