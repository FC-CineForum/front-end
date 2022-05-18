import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import authServices from "@/services/auth.js";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    token: sessionStorage.getItem("token") || localStorage.getItem("token"),
  }),
  getters:{
    userLogged:  (state) => state.user != null
  },
  actions: {
    async logIn(remember, user) {
      const { avatar, token, username } = await authServices.login(user);
      this.user = { avatar, username };
      this.token = token;
      if (remember) {
        localStorage.setItem("token", this.token);
      } else {
        sessionStorage.setItem("token", this.token);
      }
    },
    async fetchUser(){
      if(this.user || !this.token){
        return;
      }
      const {user} = await authServices.getUser(this.token);
      this.user = user
    },
    logOut(){
      this.user = "";
      this.token = "";
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
    }
  },
});
