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
  async login(user) {
    try {
      const { data } = await apiClient.post(
        "cineforum/logIn",
        {
          ...user,
        }
      );
      return data;
    } catch (err) {
      //Probably a 500
      if (!err.data) {
        throw new Error("Hubo un error, intentelo más tarde");
      }
      // Bad Request
      if (err.status === 401) {
        if (err.data.message.includes("User")) {
          throw new Error("Usuario no encontrado");
        }
        if (err.data.message.includes("Account")) {
          throw new Error("Cuenta no verificada");
        }
      }
      // Probably a 500
      throw new Error("Ha ocurrido un error, intentelo más tarde");
    }
  },

  async register(user) {
    try {
      await apiClient.post("cineforum/signUp", {
        ...user,
      });
    } catch (err) {
      //Probably a 500
      if (!err.data) {
        throw new Error("Hubo un error, intentelo más tarde");
      }
      // Bad Request
      if (err.status === 401) {
        const message = err.response.data.error;
        if (message.includes("email is already taken")) {
          throw new Error("El correo electrónico no es valido");
        }
        throw new Error("Algo salió mal con los datos, corroboralos");
      }
      // Probably a 500
      throw new Error("Ha ocurrido un error, intentelo más tarde");
    }
  },

  async verifyAccount(token) {
    try {
      await apiClient.get(
        `cineforum/verifyAccount?token=${token}`
      );
    } catch (err) {
      //Probably a 500
      if (!err.data) {
        throw new Error("Hubo un error, intentelo más tarde");
      }
      // Bad Request
      if (err.status === 401) {
        throw new Error("El token ha expirado");
      }
      if (err.status === 404) {
        throw new Error("Token no encontrado");
      }
      // Probably a 500
      throw new Error("Ha ocurrido un error, intentelo más tarde");
    }
  },

  async getUser(token){
    try {
      const { data } = await apiClient.get("cineforum/getUser",{
        headers: {Authorization:`Bearer ${token}`}
      });
      return data;
    } catch (error) {
      return null;
    }
  }
};
