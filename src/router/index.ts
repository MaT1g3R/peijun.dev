import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("../layouts/Index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue")
      },
      {
        path: "portfolio",
        name: "Portfolio",
        component: () =>
          import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue")
      },
      {
        path: "cv",
        name: "Curriculum vitae",
        component: () => import(/* webpackChunkName: "cv" */ "../views/Cv.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
