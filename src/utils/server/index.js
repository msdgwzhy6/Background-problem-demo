import axios from "axios";
import config from "./config";
import vue from "vue";
import * as loadingAPI from "@/api/loading";

// 新建一个实例，通过这个实例的动态变化，来提醒loading显示与否
const state = vue.observable({ content: 0 });

function changeState(config, add = true) {
  const { url } = config;
  const value = Object.values(loadingAPI);

  if (!value.includes(url)) {
    return;
  }
  if (add) {
    state.content += 1;
    return;
  }
  state.content -= 1;
  return;
}

const service = axios.create(config);

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    changeState(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  res => {
    changeState(res.config, false);
    try {
      const { data } = res;
      Reflect.set(res, "data", JSON.parse(data));
    } catch (e) {
      //
    }
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
export { state };
