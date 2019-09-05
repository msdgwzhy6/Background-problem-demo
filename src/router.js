import Vue from "vue";
import VueRouter from "vue-router";
import fixed from "./components/fixed.vue";
import nonFixed from "./components/nonFixed.vue";
import roll from "./components/roll.vue";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: "/", component: fixed },
    { path: "/roll", component: roll },
    { path: "/no", component: nonFixed }
  ]
});
export default router;
