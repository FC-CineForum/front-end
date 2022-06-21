<template>
  <div>
    <div class="d-inline-flex flex-column container">
      <div
        class="flex-grow-1 poster"
        :style="`background:url(${playlist.image})`"
      >
        <p class="text-center">Sin entradas</p>
      </div>
      <div class="d-flex flex-row justify-content-between p-3 content text-break">
        <router-link class="text-break" :to="{name:'Entry', params:{id:entry.id}}"><p class="fw-bold fs-5 text-break">{{ entry.title.length > 15? `${entry.title.substring(0,15)}...` : playlist.playlist }}</p></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClapperBoard from "../components/icons/solids/ClapperBoard.vue";

defineProps({
  playlist: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
div {
  color: var(--cf-dark);
}

i {
  z-index: 1;
  color: white;
  padding: 10px;
  background-color: var(--color-background);
  border-radius: 50%;
}

p {
  margin: 0;
}

svg {
  width: 20px;
}
.container {
  padding: 0;
  height: 550px;
  width: 350px;
  box-shadow: 7px 3px 3px rgba(0, 0, 0, 0.2);
}

.poster {
  padding: 5px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.content {
  max-width: 100%;
  background-color: #f7f7f7;
}
</style>
