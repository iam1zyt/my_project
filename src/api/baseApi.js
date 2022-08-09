import axios from "./axios";

export const getOrgTypeOptions = () =>
  axios.get(`/baseconf/selector/orgType/list`);

  
export const getWhetherOptions = () =>
  axios.get( `/baseconf/selector/trueOrFalseCode/list`);
