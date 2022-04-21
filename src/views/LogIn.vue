<template>
  <div class="p-5">
    <div class="d-flex flex-row align-items-center border-bottom border-dark">
      <i class="fas fa-envelope fs-1 me-2"></i>
      <CustomInput v-model:value="user" placeholder="Correo o Usuario" />
    </div>
    <div
      class="d-flex flex-row align-items-center border-bottom border-dark mt-5"
    >
      <i class="fas fa-lock fs-1 me-2"></i>
      <CustomInput
        v-model:value="password"
        placeholder="Contraseña"
        type="password"
      />
    </div>
    <div
      class="d-flex flex-row justify-content-between align-items-center mt-3"
    >
      <div class="d-flex flex-row align-items-center">
        <input type="checkbox" class="me-2" v-model="remember" />
        <p>Recordame</p>
      </div>
      <router-link to="/">¿Olvidaste tu contraseña?</router-link>
    </div>
    <div
      class="d-flex flex-column justify-content-center align-items-center mt-3"
    >
      <CustomButton class="rounded fw-bold fs-3">
        Inicio de Sesión
      </CustomButton>
      <p class="my-3">¿No tienes cuenta?</p>
      <CustomButton class="rounded fw-bold fs-3 px-4">
        <router-link class="text-white" to="/register">Registrate</router-link>
      </CustomButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CustomInput from "../components/forms/Input.vue";
import CustomButton from "../components/forms/Button.vue";

const user = ref("");

const password = ref("");

const remember = ref(false);
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

@media (max-width: 575.98px) {
  a {
    font-size: 12px;
  }

  input {
    font-size: 24px;
  }

  p {
    margin: 0;
    font-size: 12px;
  }
}
</style>
