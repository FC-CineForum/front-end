
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
            throw new Error("Ha ocurrido un error, intentelo más tarde");
        }
    },
    async addReply(ratingId,reply){
        try{
            await apiClient.post(`/cineforum/reply/${ratingId}`,reply);
        }catch(err){
            //Probably a 500
            if(!err.data){
                throw new Error("Hubo un error, intentelo más tarde");
            }
            // Bad Request
            if(err.status === 400){
                throw new Error("Falta la respuesta");
            }
            throw new Error("Ha ocurrido un error, intentelo más tarde");
        }
    },
    async addRating(entryId,rating){
        try{
            await apiClient.post(`/cineforum/rating/${entryId}`,rating);
        }catch(err){
            //Probably a 500
            if(!err.data){
                throw new Error("Hubo un error, intentelo más tarde");
            }
            // Bad Request
            if(err.status === 400){
                throw new Error("Falta la calificación");
            }
            throw new Error("Ha ocurrido un error, intentelo más tarde");
        }
    }
}