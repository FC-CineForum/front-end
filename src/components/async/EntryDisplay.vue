<template>
  <div class="mt-5 mx-5 d-flex flex-row justify-content-between">
    <div class="d-flex flex-column">
      <h1 class="h1 fw-bold">{{ entry.title }}</h1>
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
        <ClapperBoard />
        <div class="d-flex flex-column">
          <h4><span class="fw-bold">4.2</span>/5</h4>
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
      <iframe :src="entry.trailer" @click="changeVideoStatus"></iframe>
    </div>
    <div class="mt-4 col-12 col-md-10 d-flex flex-row">
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
    </div>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
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
import ClapperBoard from "@/components/icons/solids/ClapperBoard.vue";
import Actor from "@/components/Actor.vue";
import Review from "@/components/Review.vue"
import { defineProps, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const getEntryInfo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    title: "The batman",
    poster:
      "https://static.posters.cz/image/1300/posters/the-batman-2022-i122127.jpg",
    trailer: "https://www.youtube.com/embed/fWQrd6cwJ0A",
    rating: "4.2",
    review:{content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user:'Lorem Ipsum',rate:3}
  };
};

const entry = await getEntryInfo();
</script>

<style scoped>
h1 {
  font-size: 3rem;
}

svg {
  height: 50px;
  width: 50px;
}

iframe {
  width: 100%;
  height: 500px;
}

img {
  width: 250px;
  height: 350px;
}

.stats {
  color: rgba(0, 0, 0, 0.2);
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
