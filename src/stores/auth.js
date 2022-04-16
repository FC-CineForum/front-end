import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    token: sessionStorage.getItem("token") || localStorage.getItem("token"),
  }),
  getters: {
    userLogged: (state) => state.user != null,
  },
});
