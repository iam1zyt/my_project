import axios from "./axios";
import qs from "qs";

export const logout = () => axios.get(`/logInOut`);

	// getUserInfo: `/mc/user/getLoginUserName`,  
export const getUserInfo = ()=>axios.get(`/mc/user/getLoginUserName`);

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
