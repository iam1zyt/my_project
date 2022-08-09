import axios from "axios";
let _url =
  "https://www.fastmock.site/mock/3f4a0aa64c80463c02ef7b881e78d2f4/myproject";
export const queryUseEnergyUnitTableData = () =>
  axios.post(_url + "/baseconf/enterpriseorg/query");
