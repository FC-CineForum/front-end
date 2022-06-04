
import axios from "redaxios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});


export default {
    async getDashboard() {
        try {
            const { data } = await apiClient.get("cineforum/dashboard");
            return data;
        } catch (err) {
            //Probably a 500
            if (!err.data) {
                throw new Error("Hubo un error, intentelo más tarde");
            }
        }
    },

}