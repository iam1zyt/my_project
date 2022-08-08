import axios from "./axios";

const baseapi = {
  // 用能单位信息管理表
  queryUseEnergyUnitTableData(data) {
    return axios({
      url: `/api/baseconf/enterpriseorg/query`,
      method: 'post',
      data:data
    });
  },
  queryOrgTableData() {
    return axios({
      url: `/baseconf/personorg/query`,
      method: "post",
    });
  },
  getIndustrialMeterTypeList() {
    return axios({
      url: `/baseconf/selector/ent/energyType/list`,
      method: "get",
    });
  },
  queryPayerTableData() {
    return axios({
      url: `/baseconf/householder/query`,
      method: "post",
    });
  },
  queryUseEnergyUnitTableData() {
    return axios({
      url: `/baseconf/enterpriseorg/query`,
      method: "post",
    });
  },
  // 单位性质
  getOrgTypeOptions() {
    return axios({
      url: `/baseconf/selector/orgType/list`,
      method: "get",
    });
  },
  // 表头状态
  getWhetherOptions() {
    return axios({
      url: `/baseconf/selector/trueOrFalseCode/list`,
      method: "get",
    });
  },
};

export default baseapi;
