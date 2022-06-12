<template>
  <div>
    <div class="d-inline-flex flex-column container">
      <div
        class="flex-grow-1 poster"
        :style="`background:url(${entry.image})`"
      >
        <p class="text-end"><i class="fas fa-plus fa-lg"></i></p>
      </div>
      <div class="d-flex flex-row justify-content-between p-3 content">
        <router-link :to="{name:'Entry', params:{id:entry.id}}"><p class="fw-bold fs-5">{{ entry.title }}</p></router-link>
        <div class="d-flex flex-row alig-items-center">
          <ClapperBoard class="me-3" />
          <p v-if="entry.rating" class="fw-bold fs-5">{{ entry.rating }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClapperBoard from "../components/icons/solids/ClapperBoard.vue";

defineProps({
  entry: {
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
  height: 522px;
  width: 350px;
  box-shadow: 7px 3px 3px rgba(0, 0, 0, 0.2);
}

.poster {
  padding: 5px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.content {
  background-color: #f7f7f7;
}
</style>
