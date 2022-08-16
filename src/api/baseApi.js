import axios from "./axios";

export const getOrgTypeOptions = () =>
  axios.get(`/baseconf/selector/orgType/list`);

export const getWhetherOptions = () =>
  axios.get(`/baseconf/selector/trueOrFalseCode/list`);

export const queryUseEnergyUnitTableData = (data) =>
  axios({
    method: "post",
    url: `/baseconf/enterpriseorg/query`,
    data,
    responseType: "json",
  });

// 修改启用状态
export const changeUseEnergyStatus = (data) => {
  axios({
    method: "post",
    url: `/baseconf/enterpriseorg/changeStatus`,
    data,
    responseType: "json",
  });
};


