import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/user/HomeView.vue";
import entryRoutes from "./entry"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("../views/user/LogIn.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/user/Register.vue"),
  },
  {
    path: "/verifyAccount",
    name: "Validation",
    component: () => import("../views/user/Verify.vue"),
  },
  {
    path: "/entry",
    component: () => import("../views/user/entry/Layout.vue"),
    children: entryRoutes,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
