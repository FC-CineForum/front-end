import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import HomeView from "../views/user/HomeView.vue";
import entryRoutes from "./entry";
import adminRoutes from "./admin.js";

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
  {
    path: "/admin",
    component: () => import("../views/admin/Layout.vue"),
    meta: { requiresAuth: true },
    children:adminRoutes
  },
  {
    path: "/profile",
    component: () => import("../views/user/Profile.vue"),
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach( async (to, from) => {
  // Will check meta of routes and deny acces when auth is needed
  const auth = useAuthStore();
  await auth.fetchUser()
  if(to.meta.requiresAuth && !auth.userLogged) {
    return {
      path: '/login',
      // save the location we were at to come back later
    }
  }
})

export default router;
