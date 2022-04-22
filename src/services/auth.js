import axios from "axios";

const apiClient = axios.create({
  baseUrl: import.meta.env.VITE_CF_API_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  async login() {},

  async register(user) {
    try {
      const data = apiClient.post("/authRoute/signUp", { user });
      return data;
    } catch (err) {
      //Probably a 500
      if (!err.response) {
        throw new Error("Hubo un error, intentelo más tarde");
      }
      // Bad Request
      if (err.response.status === 401) {
        const message = err.response.data.error;
        if (message.includes("email is already taken")) {
          throw new Error("El correo electrónico no es valido");
        }
      }
      // Probably a 500
      throw new Error("Ha ocurrido un error, intentelo más tarde");
    }
  },
};
