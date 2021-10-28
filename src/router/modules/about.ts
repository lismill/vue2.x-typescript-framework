export default {
  path: "/about",
  name: "About",
  meta: {
    title: "关于我们",
  },
  component: () => import(/* webpackChunkName: "about" */ "@/views/about/index/index.vue"),
};
