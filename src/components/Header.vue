<template>
  <div
    class="header d-flex flex-row justify-content-between align-items-center px-3"
  >
    <div class="d-flex flex-row align-items-center">
      <IdentityLogo class="me-3" />
      <h1 class="d-none d-md-inline">CineForum</h1>
    </div>
    <div class="d-flex flex-row align-items-center">
      <i class="fas fa-bell fa-2x me-3"></i>
      <div v-if="auth.userLogged" class="user">
        <i class="fas fa-user fa-2x"></i>
      </div>
      <button v-else class="rounded-pill fw-bold">Iniciar sesión</button>
    </div>
  </div>
</template>

<script setup>
import IdentityLogo from "@/components/icons/IdentityLogo.vue";
import { useAuthStore } from "@/stores/auth.js";

const auth = useAuthStore();
</script>

<style scoped>
div {
  color: white;
}

h1 {
  margin: 0;
  text-shadow: 3px 0 0px var(--cf-highlight);
}

button {
  padding: 10px;
  border: none;
  color: white;
  background: var(--color-background-main);
}

svg {
  width: 100px;
  height: auto;
}
.header {
  background: var(--color-background);
  min-width: 100vw;
  padding: 15px 0 15px 0;
}

.user {
  padding: 15px;
  border-radius: 50%;
  background-color: grey;
}
</style>
