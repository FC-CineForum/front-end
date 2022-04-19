<template>
  <div class="p-5">
    <div class="d-flex flex-row border-bottom border-dark">
      <i class="fas fa-envelope fa-3x me-2"></i>
      <InputCustom v-model:value="user" placeholder="Correo o Usuario" />
    </div>
    <div class="d-flex flex-row border-bottom border-dark mt-5">
      <i class="fas fa-lock fa-3x me-2"></i>
      <InputCustom
        v-model:value="password"
        placeholder="Contraseña"
        type="password"
      />
    </div>
    <div class="d-flex flex-row justify-content-between mt-3">
      <div class="d-flex flex-row align-items-center">
        <input type="checkbox" class="me-2" />
        <p>Recordame</p>
      </div>
      <router-link to="/">¿Olvidaste tu contraseña?</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputCustom from "../components/forms/CustomInput.vue";

const user = ref("");
const password = ref("");
</script>

<style scoped>
i {
  color: var(--cf-main);
}

a {
  color: var(--cf-main);
  font-size: 24px;
}

input {
  width: 100%;
  font-size: 36px;
}

input[type="checkbox"] {
  width: 25px;
  height: 25px;
  border-radius: 100%;
}

p {
  margin: 0;
  font-size: 24px;
}
</style>
