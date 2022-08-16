import api from "@/api";
import router from "@/router";
import axios from "@/api/axios";
import store from "@/store";

const user = {
  namespaced: true,
  state: {
    userInfo: {},
    token: "",
    PermissionList: [],
    currentActive: "",
    currentRole: "R",
    loginAutomaticStatus: false,
    menuList: [],
  },
  mutations: {
    SET_USERINFO: (state, data) => {
      state.userInfo = data;
      localStorage.setItem("userInfo", JSON.stringify(data));
    },
    SET_PERMISSIONLIST: (state, data) => {
      state.PermissionList = data;
    },
  },
  actions: {
    // 登录
    login({ commit }, loginForm) {
      /* 
      当异步任务顺利完成且返回结果值时，会调用 resolve 函数；
      而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数。 
      */
      return new Promise((resolve, reject) => {
        api.login.login(loginForm).then((res) => {
          localStorage.setItem("hasLogin", true);
          resolve(res);
        });
      });
    },

    // 退出登录
    logout({ commit }) {
      commit("SET_USERINFO", "");
      commit("SET_PERMISSIONLIST");
      localStorage.clear();
      router.push({
        name: "login",
      });
    },
  },
};

export default user;
