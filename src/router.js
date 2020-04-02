import Vue from "vue";
import VueRouter from "vue-router";

const fictitious = () => import("@/view/fictitious");
const keepAlive = () => import("@/view/keep-alive");
const loading = () => import("@/view/loading");

const fixed = () => import(/* webpackChunkName: "fictitious-fixed" */ "@/view/fictitious/fixed");
const nonFixed = () =>
  import(/* webpackChunkName: "fictitious-nonFixed" */ "@/view/fictitious/nonFixed");
const roll = () => import(/* webpackChunkName: "fictitious-roll" */ "@/view/fictitious/roll");

Vue.use(VueRouter);
const router = new VueRouter({
  mode: process.env.NODE_ENV === "production" ? "hash" : "history",
  routes: [
    {
      path: "/fictitious/",
      component: fictitious,
      children: [
        {
          path: "",
          name: "roll",
          component: roll
        },
        {
          path: "fixed",
          name: "fixed",
          component: fixed
        },
        {
          path: "nonFixed",
          name: "nonFixed",
          component: nonFixed
        }
      ]
    },
    {
      path: "/keepAlive/",
      component: keepAlive,
      children: [
        {
          path: "",
          component: () =>
            import(/* webpackChunkName: "keep-alive-home" */ "@/view/keep-alive/home"),
          name: "keepAlive",
          meta: {
            depth: 1
          }
        },
        {
          path: "list",
          component: () =>
            import(/* webpackChunkName: "keep-alive-list" */ "@/view/keep-alive/list"),
          name: "list",
          meta: {
            name: "list",
            keepAlive: true,
            depth: 2
          }
        },
        {
          path: "details",
          component: () =>
            import(/* webpackChunkName: "keep-alive-details" */ "@/view/keep-alive/details"),
          name: "details",
          meta: {
            depth: 3
          }
        }
      ]
    },
    {
      path: "/loading/",
      component: loading,
      children: [
        {
          path: "",
          name: "loading",
          component: () =>
            import(/* webpackChunkName: "keep-alive-details" */ "@/view/loading/list")
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
export default router;
