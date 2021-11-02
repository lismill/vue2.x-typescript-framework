import Vue from "vue";
import App from "@/app.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import VueI18n from "vue-i18n";
import i18n from "@/utils/i18n";
import "@/components/index";
import "@/assets/styles/index.scss";

Vue.config.productionTip = false;
Vue.use(VueI18n);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
