import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index/index.vue"),
  },
];

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
