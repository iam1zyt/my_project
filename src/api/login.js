import axios from "./axios";
import qs from "qs";

export const isOpen = () => axios.get(`/expertSysSetting/isOpen`);

export const logout = () => axios.get(`/logInOut`);

export const getApproveInfoList = () => axios.get(`org/approveInfo`);

export const getDefaultMenus = () => axios.get(`/menu/getMenus`);

	// getUserInfo: `/mc/user/getLoginUserName`,   getMenu: `/mc/menu/getMenusByRole`,
export const getUserInfo = ()=>axios.get(`/mc/user/getLoginUserName`);
export const getMenu = ()=>axios.get(`/mc/menu/getMenusByRole`);


// export const login = (params) =>
//   axios({
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     method: "post",
//     url: "/login",
//     params: qs.stringify(params),
//   });

export const login = (params) => {
  params = qs.stringify(params);
  return axios.post("/login", params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
};
