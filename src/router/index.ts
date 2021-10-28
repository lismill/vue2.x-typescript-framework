import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

// 引入 modules 文件夹下的所有路由
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("@/router/modules", true, /\.ts$/);
const modules: any = requireAll(req).map((route: any) => route.default);
const routes: Array<RouteConfig> = [
  // 首页
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      icon: "home",
      keepAlive: false,
      hidden: true,
      permission: 10000,
    },
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/index/index.vue"),
  },

  // 登录
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),
  },

  // 其他模块
  ...modules,

  // 404
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404/index.vue"),
  },
];

// 配置路由信息
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 修改项目标题
router.beforeEach((to: any, from: any, next: any) => {
  document.title = `管理后台${to.meta.title ? " - " + to.meta.title : ""}`;
  next();
});

export default router;
