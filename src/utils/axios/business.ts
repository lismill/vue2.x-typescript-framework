import { AxiosRequestConfig, AxiosResponse } from "axios";
export default {
  /**
   * 拦截请求处理相应的业务逻辑
   * @param config config
   * @returns config
   */
  request(config: AxiosRequestConfig): AxiosRequestConfig {
    console.log("请求拦截器处理业务逻辑", config);

    /**
     * 处理 POST 请求参数
     */
    if ((config.method as string).toUpperCase() === "POST") {
      (config as any).headers["Content-Type"] = "application/json;charset=utf-8";
    }
    return config;
  },

  /**
   * 拦截响应处理相应的业务逻辑
   * @param config config
   * @returns config
   */
  response(response: AxiosResponse): AxiosResponse {
    console.log("返回拦截器处理业务逻辑", response);
    return response.data;
  },
};
