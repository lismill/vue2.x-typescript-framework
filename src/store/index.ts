import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 引入 modules 文件夹下的所有 store
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("@/store/modules", true, /\.ts$/);
const modules: any = {};
requireAll(req).map((route: any) => (modules[route.default.key] = route.default));

export default new Vuex.Store({
  modules: {
    ...modules,
  },
});
