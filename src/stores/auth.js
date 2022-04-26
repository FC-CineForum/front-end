import { defineStore } from "pinia";

import authServices from "@/services/auth.js";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    token: sessionStorage.getItem("token") || localStorage.getItem("token"),
  }),
  getters: {
    userLogged: (state) => state.user != null,
  },
  actions: {
    async logIn(remember, user) {
      const { avatar, token } = await authServices.login(user);
      this.user = avatar;
      this.token = token;
      if (remember) {
        sessionStorage.setItem("token", this.token);
      } else {
        localStorage.setItem("token", this.token);
      }
    },
  },
});
