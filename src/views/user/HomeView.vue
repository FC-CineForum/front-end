<script setup>
import { reactive } from "vue";
import Entry from "../../components/Entry.vue";
import Header from "@/components/Header.vue";
const movie = reactive({
  title: "The Batman",
  rating: 4.2,
  poster:
    "https://static.posters.cz/image/1300/posters/the-batman-2022-i122127.jpg",
});
</script>

<template>
  <Header />
  <h1>Nuevas Entradas</h1>
  <div class="container-fluid d-flex flex-row justify-start">
    <Entry :movie="movie" />
  </div>
</template>
