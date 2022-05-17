<template>
  <div class="d-inline-flex flex-column flex-md-row align-items-center display">
    <img v-if="img" :src="img" :alt="name" />
    <i
      v-else
      class="fas fa-user fa-4x bg-secondary text-white rounded-circle"
    ></i>
    <div class="ms-3 d-flex flex-column">
      <h4 class="fw-bold text-center text-md-start">{{ name }}</h4>
      <h4 class="text-center text-md-start">{{ role }}</h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
i {
  padding: 20px 25px;
}

img {
  width: 128px;
  height: 128px;
  border-radius: 100%;
}

@media (min-width: 768px) {
  .display {
    width: 350px;
  }
}
</style>
