<template>
  <div
    class="container-fluid d-flex flex-column justify-content-center align-items-center"
    style="min-height: 50vh"
  >
    <h1 class="text-center">Validando correo electrónico</h1>
    <div class="d-flex justify-content-center">
      <div
        class="spinner-border mt-3"
        style="width: 4rem; height: 4rem"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import authServices from "@/services/auth.js";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const route = useRoute();

onMounted(async ()=>{
  try {
    console.log(route.query.token);
    await authServices.verifyAccount(route.query.token)
    router.push("/login")
  } catch (err) {
    alert(err)
    router.push("/")
  }
})

const validateAccount = async() =>{
  
}

</script>
<style></style>
