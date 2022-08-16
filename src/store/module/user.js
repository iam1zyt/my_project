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
    SET_CURRENTACTIVE: (state, data) => {
      state.currentActive = data;
      localStorage.setItem("currentActive", data);
    },
    SET_MENULIST: (state, data) => {
      state.menuList = data;
    },
    SET_CURRENTPAGE: (state, data) => {
      state.currentPage = data;
      localStorage.setItem("currentPage", data);
    },
    SET_CURRENTROLE: (state, data) => {
      state.currentRole = data;
      localStorage.setItem("currentRole", data);
    },
  },
  actions: {
    // 登录
    login({ commit }, loginForm) {
      /* 
      当异步任务顺利完成且返回结果值时，会调用 resolve 函数；
      而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数。 
      */
     console.log(loginForm);
      return new Promise((resolve, reject) => {
        api.login.login(loginForm).then((res) => {
          localStorage.setItem("hasLogin", true);
          resolve(res);
        });
      });
    },

    // 获取用户信息
    getMenus({ commit }) {
      if (!localStorage.userInfo || localStorage.userInfo == "undefined") {
        localStorage.clear();
        router.push({
          name: "login",
        });
      }
      return new Promise((reslove, reject) => {
        // var id = JSON.parse(localStorage.userInfo).departmentId;
        axios.get("/getMenu").then((res) => {
          var menuListAll = res.obj;
          menuListAll.forEach((item, index) => {
            if (!item.isShow) {
              menuListAll.splice(index, 1);
            }
          });
          for (let i = 0; i < menuListAll.length; i++) {
            menuListAll[i].items.forEach((item, index) => {
              if (!item.isShow) {
                menuListAll[i].items.splice(index, 1);
              }
            });
          }
          for (let j = 0; j < menuListAll.length; j++) {
            for (let k = 0; k < menuListAll[j].length; k++) {
              menuListAll[j].items[k].items.forEach((item, index) => {
                if (!item.isShow) {
                  menuListAll[j].items[k].items.splice(index, 1);
                }
              });
            }
          }
          commit("SET_MENULIST", menuListAll);
          if (!localStorage.currentPage) {
            commit(
              "SET_CURRENTROLE",
              menuListAll[0].items[0].items[0].permission
            );
            commit("SET_CURRENTPAGE", menuListAll[0].items[0].items[0].id);
          }
          setTimeout(() => {
            // 路由
            if (!localStorage.currentActive) {
              commit("SET_CURRENTACTIVE", menuListAll[0].id);
            }
          }, 100);
          commit("SET_PERMISSIONLIST", router);

          router.addRoute([
            {
              path: "/home",
              name: "home",
              component: () => import("@/Views/home"),
              children: store.state.user.PermissionList,
            },
            {
              path: "*",
              redirect: "/home",
            },
          ]);
          reslove(res);
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
