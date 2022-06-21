<template>
  <Header />
  <div class="p-5">
    <div
      class="d-flex flex-row align-items-center border-bottom border-dark mx-md-5"
    >
      <i class="fas fa-envelope fs-1 me-2"></i>
      <CustomInput
        v-model:value="state.any"
        placeholder="Correo o Usuario"
      />
    </div>
    <p v-if="v$.any.$error" class="text-danger text-center">
      Es requerido el correo electrónico
    </p>
    <div
      class="d-flex flex-row align-items-center border-bottom border-dark mt-md-5 mx-md-5"
    >
      <i class="fas fa-lock fs-1 me-2"></i>
      <CustomInput
        v-model:value="state.password"
        placeholder="Contraseña"
        type="password"
      />
    </div>
    <p v-if="v$.password.$error" class="text-danger text-center">
      Es requerida el contraseña
    </p>
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
      <CustomButton class="rounded fw-bold fs-3" @click="logUser">
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
import { useRouter, onBeforeRouteLeave } from "vue-router";
import { ref, computed, reactive } from "vue";
import { useAuthStore } from "@/stores/auth.js";
import useValidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Header from "@/components/Header.vue";
import CustomInput from "../../components/forms/Input.vue";
import CustomButton from "../../components/forms/Button.vue";

const router = useRouter();

const auth = useAuthStore();

const state = reactive({
  any: "",
  password: "",
});

const remember = ref(false);

const user = computed(() => {
  return {
    any: state.any,
    password: state.password,
  };
});

onBeforeRouteLeave((to, from, next) => {
  if (Object.keys(from).length === 0) {
    next("/");
  }
  if (to.name == "Validation" || (to.name == "Register" && auth.user)) {
    next("/");
  }
  next();
});

const rules = computed(() => {
  return { any: { required }, password: { required } };
});

const v$ = useValidate(rules, state);

const logUser = async () => {
  await v$.value.$validate();
  if (v$.value.$error) {
    alert("Revisa los errores e intentalo de nuevo");
    return;
  }
  try {
    await auth.logIn(remember.value, user.value);
    router.go(-1);
  } catch (err) {
    alert(err);
  }
};
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
