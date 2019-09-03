import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import fixed from "./components/fixed.vue";
import nonFixed from "./components/nonFixed.vue";

import "normalize.css";
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/", component: fixed },
    { path: "/no", component: nonFixed }
  ]
});
Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
