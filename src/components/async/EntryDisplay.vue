<template>
  <div class="mt-5 mx-5 d-flex flex-row justify-content-between">
    <div class="d-flex flex-column">
      <h1 class="h1 fw-bold">{{ entry.title }}</h1>
      <div class="d-flex fs-3 stats">
        <p>{{entry.release}}</p>
        &#9679;
        <p>{{entry.classification}}</p>
        &#9679;
        <p>1h40m</p>
      </div>
    </div>
    <div class="d-flex flex-column">
      <h3 class="fw-bold">Calificación</h3>
      <div class="d-flex justify-content-around">
        <ClapperBoard />
        <div class="d-flex flex-column">
          <h4><span class="fw-bold">{{rating.avg}}</span>/5</h4>
          <h4>5k</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="row d-flex flex-row justify-content-center">
    <div
      class="col-12 col-md-10 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-end"
    >
      <img :src="entry.image" alt="poster" />
      <img :src="entry.trailer" class="banner" alt="banner"/>
    </div>
    <!-- <div class="mt-4 col-12 col-md-10 d-flex flex-row">
      <div
        class="rounded-pill p-1 gender d-flex flex-row justify-content-center"
      >
        <span>Ciencia ficción</span>
      </div>
      <div
        class="rounded-pill p-1 gender d-flex flex-row justify-content-center"
      >
        <span>Acción</span>
      </div>
      <div
        class="rounded-pill p-1 gender d-flex flex-row justify-content-center"
      >
        <span>Suspenso</span>
      </div>
    </div> -->
    <div class="mt-4 col-12 col-md-10">
      <h4>
        <span class="fw-bold"> Director:</span>
        <span class="action pointer">Lorem Ipsum</span>
      </h4>
      <h4>
        <span class="fw-bold"> Guionistas:</span>
        <span class="action pointer">Lorem Ipsum</span>
        <span class="action pointer">Lorem Ipsum</span>
      </h4>
    </div>
    <div class="col-12 col-md-10">
      <h4 class="fw-bold">Elenco:</h4>
      <div class="cast">
        <Actor
          v-for="i in 10"
          name="Robert Pattinson"
          role="Batman"
          img="https://s1.qwant.com/thumbr/0x380/8/8/75163b41ed922ef17aa0df0116cc4d9f537258e0b817726780be2a0a0121d8/8A4PS5iG7GWEAVFftyqMZKl3qcr.jpg?u=https%3A%2F%2Fimg.sfilm.hu%2Fw780%2F8A4PS5iG7GWEAVFftyqMZKl3qcr.jpg&q=0&b=1&p=0&a=0"
        />
      </div>
    </div>
    <div class="mt-4 col-12 col-md-10">
      <h4 class="fw-bold">Argumento:</h4>
      <p class="fs-4">
        {{entry.synopsis}}
      </p>
    </div>
    <div class="col-12 col-md-10 mb-5">
        <h4 class="fw-bold">Opiniones de usuarios</h4>
        <Review v-if="entry.review" :review="entry.review" />
        <div class="mt-4 d-flex flex-row align-items-center action pointer">
          <h4 class="m-0 me-2 fw-bold"><router-link to="/entry/reviews">Ver más <i class="fas fa-chevron-right fa-lg"></i></router-link></h4>
        </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import ClapperBoard from "@/components/icons/solids/ClapperBoard.vue";
import Actor from "@/components/Actor.vue";
import Review from "@/components/Review.vue"
import services from "@/services/entry.js";

const router = useRouter();

const route = useRoute();

const fetchData = async () => {
  try{
    const data = await services.getEntryById(route.params.id);
    return data;
  }catch(e){
    alert(e)
    router.push('/');
  }
};


const {entry, rating} = await fetchData();

</script>

<style scoped>
h1 {
  font-size: 3rem;
}

svg {
  height: 50px;
  width: 50px;
}

img {
  width: 250px;
  height: 350px;
}

.stats {
  color: rgba(0, 0, 0, 0.2);
}

.banner {
  width: 100%;
  height: 500px;
}

.action {
  color: var(--cf-main);
  font-weight: normal;
}

.gender {
  border: var(--color-border-main) 2px solid;
  min-width: 100px;
  margin-right: 2em;
}

.cast {
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
}

gender:last-child {
  margin-right: 0;
}

@media (min-width: 768px) {
  img {
    transform: translateX(50px);
  }
}
</style>
