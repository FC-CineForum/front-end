
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
    },
    async addInteraction(ratingId,like){
        try {
            await apiClient.post(`/cineforum/interaction/${ratingId}`,like);
        } catch (error) {
            if (!error.data) {
                throw new Error("Hubo un error, intentelo más tarde");
            }
            // Bad Request
            if(err.status === 400){
                throw new Error("Falta la calificación");
            }
            throw new Error("Ha ocurrido un error, intentelo más tarde");
        }
    },
    async getLike(ratingId, username){
        try {
            const { data } = await apiClient.get(`/cineforum/like/${ratingId}/${username}`);
            return data;
        } catch (error) {
            if (!error.data) {
                throw new Error("Hubo un error, intentelo más tarde");
            }
            // Bad Request
            if(err.status === 400){
                throw new Error("Falta un elemento");
            }
            throw new Error("Ha ocurrido un error, intentelo más tarde");
        }
    },

    async deleteInteraction(ratingId,user){
        try {
            await apiClient.delete(`/cineforum/interaction/${ratingId}`,{ data: {...user}});
        } catch (error) {
            if (!error.data) {
                throw new Error("Hubo un error, intentelo más tarde");
            }
            // Bad Request
            if(error.status === 400){
                throw new Error("Falta un elemento");
            }
            throw new Error("Ha ocurrido un error, intentelo más tarde");
        }
    }/**,

    async deleteUser(username) {
        try {
            await apiClient.delete(`/cineforum/users/${username}`)
        } catch (err) {
            throw new Error("Hubo un error, inténtalo más tarde")
        }
    },

    async makeAdmin(username) {
        try {
            await apiClient.post(`/cineforum/users/${username}`, true);
        } catch (err) {
            throw new Error("Hubo un error, inténtalo más tarde")
        }
    },

    async removeAdmin(username) {
        try {
            await apiClient.post(`/cineforum/users/${username}`, false);
        } catch (err) {
            throw new Error("Hubo un error, inténtalo más tarde")
        }
    },

    async deleteValoration(idValoration) {
        try {
            await apiClient.delete(`/cineforum/rating/${idValoration}`)
        } catch (err) {
            throw new Error("Hubo un error, inténtalo más tarde")
        }
    },

    async deleteComment(idComment) {
        try {
            await apiClient.delete(`/cineforum/reply/${idComment}`)
        } catch (err) {
            throw new Error("Hubo un error, inténtalo más tarde")
        }
    } */
    
}