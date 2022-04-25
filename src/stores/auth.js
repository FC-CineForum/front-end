import { defineStore } from "pinia";

import authService from "@/services/auth.js";

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
    async signUp(remember, user) {
      const { username, avatar, accessToken } = await authService.register(
        user
      );
      this.user = { username, avatar };
      this.token = accessToken;
      if (remember) {
        sessionStorage.setItem("token", this.token);
      } else {
        localStorage.setItem("token", this.token);
      }
    },
  },
});
