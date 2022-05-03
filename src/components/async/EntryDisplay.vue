<template>
    <div class="mt-5 mx-2 d-flex justify-content-between">
        <div class="d-flex flex-column">
            <h1 class="h1 fw-bold">{{info.title}}</h1>
            <div class="d-flex fs-3 stats">
                <p>2002</p> 
                &#9679;
                <p>PG-13</p>
                &#9679;
                <p>1h40m</p>
            </div>
        </div>
        <div class="d-flex flex-column">
            <h3 class="fw-bold">Calificación</h3>
            <div class="d-flex justify-content-around">
                <ClapperBoard/>
                <div class="d-flex flex-column">
                    <h4><span class="fw-bold">4.2</span>/5</h4>
                    <h4>5k</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ClapperBoard from "../icons/solids/ClapperBoard.vue";
import { defineProps } from "vue";

const props = defineProps({
    title:{
        type: String,
        required: true
    }
})
const getEntryInfo = async () =>{
    await new Promise(resolve => setTimeout(resolve,3000));
    return {
        title: "The batman",
        poster: "https://static.posters.cz/image/1300/posters/the-batman-2022-i122127.jpg",
        trailer: "https://www.youtube.com/watch?v=fWQrd6cwJ0A",
        rating: "4.2"
    }
}

const info = await getEntryInfo()
</script>

<style scoped>
h1{
    font-size: 3rem;
}

svg{
    height: 50px;
    width: 50px;
}

.stats{
    color: rgba(0, 0, 0, .2);
}

</style>
