import clipboard from "./clipboard";

// 自定义指令
const directives: any = {
  clipboard,
};

export default {
  install(Vue: any) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
