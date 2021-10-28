import Vue from "vue";
import SvgIcon from "@/components/svg-icon/index.vue";

/**
 * 引入 @/assets/svg 下的所有 svg 文件
 */
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("@/assets/svg", true, /\.svg$/);
requireAll(req);

// 注册全局组件
Vue.component("svg-icon", SvgIcon);
