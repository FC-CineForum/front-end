<script setup>
import { RouterView } from "vue-router";
</script>

<template>
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

.pointer {
  cursor: pointer;
}

.reflection{
  transform: scaleX(-1);
}
</style>
