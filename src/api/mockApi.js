import axios from "axios";
let _url =
  "https://www.fastmock.site/mock/3f4a0aa64c80463c02ef7b881e78d2f4/myproject";
export const queryUseEnergyUnitTableData = () =>
  axios.post(_url + "/baseconf/enterpriseorg/query");

  export const getRandomImage=()=>axios.get(_url + '/RandomImage');

export const login =(userName,password)=>axios({
  method: "post",
  url: _url+`/login`,
  data:userName,password,
  responseType:JSON
})