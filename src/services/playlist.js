//readaxios object creation with app config
import axios from 'redaxios';

const apiClient = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

export default {
    getAllPlaylists: async (user) => {
        try {
            const { data } = await apiClient.get(`/cineforum/playlist/${user}`);
            return data;
        } catch(error){
            if(!error.data){
                throw new Error("Hubo un error, intentelo más tarde");
            }
            // Bad Request
            if(error.status === 401){
                throw new Error("Algo salió mal con los datos, corroboralos");
            }
            //Not found
            if(error.status === 404){
                throw new Error("No hay playlists para mostrar");
            }
            // Probably a 500
            throw new Error("Ha ocurrido un error, intentelo más tarde");
        }
    },
    createPlaylist: async (playlist) => {
        try {
            await apiClient.post(`/cineforum/playlist`, playlist);
        } catch (error) {
            if(!error.data){
                throw new Error("Hubo un error, intentelo más tarde");
            }
        }
    },
    addEntryToPlaylist: async (data) => {
        try {
            await apiClient.put(`/cineforum/playlist/`, {...data});
        } catch (error) {
            if(!error.data){
                throw new Error("Hubo un error, intentelo más tarde");
            }
        }
    },

    getPlaylistInfo: async (username,playlist)=>{
        try {
            const { data } = await apiClient.get(`/cineforum/playlist/${username}/${playlist}`);
            return data
        } catch (error) {
            // Probably a 500
            throw new Error("Ha ocurrido un error, intentelo más tarde");
        }
    }
}