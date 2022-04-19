<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

a:hover {
  color: inherit;
}

input:focus {
  outline: none;
}
</style>
