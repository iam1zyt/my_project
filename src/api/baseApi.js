import axios from "./axios";

export const getOrgTypeOptions = () =>
  axios.get(`/baseconf/selector/orgType/list`);

export const getWhetherOptions = () =>
  axios.get(`/baseconf/selector/trueOrFalseCode/list`);

// 获取表格数据
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

/*   @description 住宅管理->查询缴费人
     queryPayerTableData: `/baseconf/householder/query`,
      */

export const queryPayerTableData = (data) =>
  axios({
    method: "post",
    url: `/baseconf/householder/query`,
    data,
    responseType: "json",
  });

// 用能单位查询
// getUseEnergyUnitDataInfo: (id) => `/baseconf/enterpriseorg/${id}/info`,
export const getUseEnergyUnitDataInfo = (id) =>
  axios.get(`/baseconf/enterpriseorg/${id}/info`);

  // searchSmartMeterList: [`/baseconf/houseMeter/search/smartMeter`],

  export const searchSmartMeterList =(data)=>
  axios({
    method: "post",
    url: `/baseconf/houseMeter/search/smartMeter`,
    data,
    responseType: "json",
  })
