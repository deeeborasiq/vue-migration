import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "/movie/:id",
    name: "Movie",
    component: () => import("./pages/Movie.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("./pages/NotFound.vue"),
  },
];
const router = new Router({
  routes,
});

export default router;
