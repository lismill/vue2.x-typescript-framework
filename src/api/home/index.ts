import request from "@/utils/axios/index";

// 获取首页配置
export const GetConfig = (params: any): Promise<any> => {
  return request.get("http://yapi.syy.dongchali.cn/mock/469/platform/integralActivity/list", { params });
};

// 设置首页配置
export const SetConfig = (params: any): Promise<any> => {
  return request.post("/home/config", params);
};
