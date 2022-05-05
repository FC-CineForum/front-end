<template>
    <div class="mt-5 mx-5 d-flex flex-row justify-content-between">
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
    <div class="row d-flex flex-row justify-content-center">
        <div class="col-12 col-md-10 d-flex flex-column flex-md-row justify-content-center  align-items-center align-items-md-end">
            <img :src="info.poster" alt="poster">
            <iframe :src="info.trailer" @click="changeVideoStatus"></iframe>
        </div>
    </div>
    <div class="mt-4 row d-flex flex-row justify-content-center">
        <div class="col-12 col-md-10 d-flex flex-row">
            <div class="rounded-pill p-1 gender d-flex flex-row justify-content-center">
            <span>Ciencia ficción</span>
        </div>
        <div class="rounded-pill p-1 gender d-flex flex-row justify-content-center">
            <span>Acción</span>
        </div>
        <div class="rounded-pill p-1 gender d-flex flex-row justify-content-center">
            <span>Suspenso</span>
        </div>
        </div>
    </div>
    <div class="mt-4 row d-flex flex-row justify-content-center">
        <div class="col-12 col-md-10">
            <h4> <span class="fw-bold"> Director:</span> <span class="info pointer">Lorem Ipsum</span></h4>
            <h4> <span class="fw-bold"> Guionistas:</span> <span class="info pointer">Lorem Ipsum</span> <span class="info pointer">Lorem Ipsum</span></h4>
        </div>
    </div>
    <div class="mt-4 row d-flex justify-content-center">
        <div class="col-12 col-md-10">
            <h4 class="fw-bold">Elenco:</h4>
            <div class="cast"></div>
        </div>
    </div>
</template>

<script setup>
import ClapperBoard from "../icons/solids/ClapperBoard.vue";
import { defineProps , ref} from "vue";

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
        trailer: "https://www.youtube.com/embed/fWQrd6cwJ0A",
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

iframe{
    width: 100%;
    height: 500px;
}

img{
    
    width: 250px;
    height: 350px;
}

.stats{
    color: rgba(0, 0, 0, .2);
}

.info{
    color:var(--cf-main);
    font-weight: normal;
}

.gender{
    border: var(--color-border-main) 2px solid;
    min-width: 100px;
    margin-right: 2em;
}

.cast{
    width: 100%;
    max-height: 400px;
}

gender:last-child{
    margin-right: 0;
}

@media (min-width: 768px){
    img{
        transform: translateX(50px);
    }
}

</style>
