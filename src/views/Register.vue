<template>
  <Header />
  <div class="p-5">
    <div class="row d-flex flex-row justify-content-around">
      <div
        class="col-md-5 d-flex flex-row align-items-center border-bottom border-dark"
      >
        <CustomInput v-model:value="state.username" placeholder="Usuario" />
      </div>
      <div
        class="col-md-5 d-flex flex-row align-items-center border-bottom border-dark"
      >
        <CustomInput v-model:value="state.email" placeholder="Correo" />
      </div>
    </div>
    <p v-if="v$.username.$error" class="text-danger">
      Se necesita un usuario entre 8 y 25 caracteres
    </p>
    <div class="row d-flex flex-row justify-content-around">
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput v-model:value="state.name" placeholder="Nombre" />
      </div>
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput v-model:value="state.lastName" placeholder="Apellidos" />
      </div>
    </div>
    <div class="row d-flex flex-row justify-content-around">
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput
          v-model:value="state.password.password"
          placeholder="Contraseña"
          type="password"
        />
      </div>
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput
          v-model:value="state.password.confirm"
          placeholder="Confirmar contraseña"
          type="password"
        />
      </div>
    </div>
    <p v-if="v$.password.confirm.$error" class="text-danger text-center">
      Las contraseñas no coinciden
    </p>
    <div class="row d-flex flex-row justify-content-around">
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput
          v-model:value="state.birthDate"
          placeholder="Fecha de Nacimiento"
          type="date"
        />
      </div>
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CountrySelector v-model:value="state.country" />
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-3"
  >
    <CustomButton class="rounded fw-bold fs-3 px-4" @click="signUser">
      Registrate
    </CustomButton>
    <p class="my-3">¿Ya tienes cuenta?</p>
    <CustomButton class="rounded fw-bold fs-3">
      <router-link class="text-white" to="/login">Inicia Sesión</router-link>
    </CustomButton>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import authServices from "@/services/auth.js";
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "@vuelidate/validators";
import Header from "@/components/Header.vue";
import CountrySelector from "@/components/forms/CountrySelector.vue";
import CustomInput from "@/components/forms/Input.vue";
import CustomButton from "@/components/forms/Button.vue";

const router = useRouter();

const state = reactive({
  username: "",
  name: "",
  lastName: "",
  email: "",
  password: {
    password: "",
    confirm: "",
  },
  birthDate: "",
  country: "",
});

const birthDateFormatted = computed(() => {
  const info = state.birthDate.split("-");
  return `${info[2]}/${info[1]}/${info[0]}`;
});

const user = computed(() => {
  const info = { ...state, avatar: "any_link", isPublic: true };
  info["password"] = state.password.password;
  info["birthDate"] = birthDateFormatted;
  return info;
});

const rules = computed(() => {
  return {
    username: { required, minLength: minLength(8), maxLength: maxLength(25) },
    name: { required },
    lastName: { required },
    email: { required, email },
    password: {
      password: { required },
      confirm: { required, sameAs: sameAs(state.password.password) },
    },
    birthDate: { required, maxLength: maxLength(10) },
    country: { required },
  };
});

const v$ = useValidate(rules, state);

const signUser = async () => {
  await v$.value.$validate();
  if (v$.value.$error) {
    alert("Todos los campos son necesarios");
    return;
  }
  try {
    await authServices.register(user);
    router.push("/");
    alert("Debes validar tu correo electrónico");
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

select {
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

  select {
    font-size: 24px;
  }

  p {
    margin: 0;
    font-size: 12px;
  }
}
</style>
