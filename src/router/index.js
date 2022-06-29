import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// Creates routes

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "IP Address Tracking",
    },
  },
];

// Creates router

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change title

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
