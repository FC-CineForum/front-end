<template>
  <div class="p-5">
    <div class="row d-flex flex-row justify-content-around">
      <div
        class="col-md-5 d-flex flex-row align-items-center border-bottom border-dark"
      >
        <CustomInput v-model:value="userName" placeholder="Usuario" />
      </div>
      <div
        class="col-md-5 d-flex flex-row align-items-center border-bottom border-dark"
      >
        <CustomInput v-model:value="email" placeholder="Correo" />
      </div>
    </div>
    <div class="row d-flex flex-row justify-content-around">
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput v-model:value="name" placeholder="Nombre" />
      </div>
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput v-model:value="lastName" placeholder="Apellidos" />
      </div>
    </div>
    <div class="row d-flex flex-row justify-content-around">
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput
          v-model:value="password"
          placeholder="Contraseña"
          type="password"
        />
      </div>
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput
          v-model:value="passwordConfirm"
          placeholder="Confirmar contraseña"
          type="password"
        />
      </div>
    </div>
    <div class="row d-flex flex-row justify-content-around">
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CustomInput
          v-model:value="birthDate"
          placeholder="Fecha de Nacimiento"
          type="date"
        />
      </div>
      <div class="col-md-5 d-flex flex-row border-bottom border-dark">
        <CountrySelector v-model:value="country" />
      </div>
    </div>
  </div>
  <div class="d-flex flex-row align-items-center ms-5">
    <input type="checkbox" class="me-2" v-model="remember" />
    <p>Recordame</p>
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import CountrySelector from "@/components/forms/CountrySelector.vue";
import CustomInput from "@/components/forms/Input.vue";
import CustomButton from "@/components/forms/Button.vue";

const router = useRouter();

const auth = useAuthStore();

const userName = ref("");

const name = ref("");

const lastName = ref("");

const email = ref("");

const password = ref("");

const passwordConfirm = ref("");

const remember = ref(false);

const birthDate = ref("");

const country = ref("");

const user = computed(() => {
  return {
    userName,
    name,
    lastName,
    email,
    password,
    birthDate,
    country,
    avatar: "",
    isPublic: true,
  };
});

const signUser = async () => {
  try {
    router.push("/");
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
