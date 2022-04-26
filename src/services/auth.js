import axios from "redaxios";

// const apiClient = axios.create({
//   baseUrl: import.meta.env.VITE_API_URL,
//   withCredentials: false, // This is the default
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
//   timeout: 10000,
// });

export default {
  async login(user) {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/cineforum/logIn",
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
        throw new Error("El correo o contraseña no es valido");
      }
      // Probably a 500
      throw new Error("Ha ocurrido un error, intentelo más tarde");
    }
  },

  async register(user) {
    try {
      await axios.post("http://localhost:3000/cineforum/signUp", {
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
      }
      // Probably a 500
      throw new Error("Ha ocurrido un error, intentelo más tarde");
    }
  },
};
