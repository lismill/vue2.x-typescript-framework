import Vue from "vue";
import App from "@/app.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import i18n from "@/utils/i18n";
import "@/components/index";
import "@/assets/styles/index.scss";
import prototype from "@/utils/prototype";

Vue.config.productionTip = false;

/**
 * 添加实例 property
 */
prototype.forEach((item: { key: string; value: any }) => (Vue.prototype[item["key"]] = item.value));

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
