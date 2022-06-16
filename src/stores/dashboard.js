import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import userServices from "@/services/user.js";

export const useDashboardStore = defineStore({
  id: "dashboard",
  state: () => ({
    entries:[],
  }),
  actions: {
    async fetchDashboard() {
        if(this.entries.length > 0){
          return this.entries;
        }
        const data = await userServices.getDashboard();
        this.entries = data;
        return this.entries;
    },
  },
});
