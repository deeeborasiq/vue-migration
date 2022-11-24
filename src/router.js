import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "/movie/:id",
    name: "Movie",
    props: true,
    component: () => import("./pages/Movie.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("./pages/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
