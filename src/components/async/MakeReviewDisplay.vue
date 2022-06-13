<template>
    <div>
        <div class="m-0 mt-4 container-fluid row d-flex justify-content-center">
            <div class="col-8 col-md-7  col-lg-3">
                <img :src="data.entry.image" alt="poster">
            </div>
            <div class="col-8 col-md-7 col-lg-7 d-flex flex-column">
                <div class="d-flex flex-row justify-content-between">
                    <h1 class="h1"><span class="fw-bold">{{data.entry.title}}</span> <span class="fw-light">({{data.entry.release}})</span></h1>
                </div>
                <div class="h3 d-flex flex-row align-items-center">
                  <p class="m-0 me-2">Calificación:</p>
                  <CustomInput class="p-0" type="number" v-model:value="stars" min="1" max="5" />
                </div>
            </div>
      </div>
      <div class="mx-5 mt-5">
        <h1>Reseña</h1>
        <CustomTextArea class="border border-dark container-fluid" placeholder="Cuentanos la razón de tu calificación si así lo deseas" v-model:value="review" />
      </div>
      <div class="mt-5 container-fluid d-flex justify-content-center align-items-center">
        <button class="btn btn-primary fw-bold fs-4" @click="submitRating">Publicar</button>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import entryServices from "@/services/entry.js";
import { useAuthStore } from "@/stores/auth.js";
import userServices from "@/services/user.js";
import CustomTextArea from '../forms/TextArea.vue';
import CustomInput from '../forms/Input.vue';

const router = useRouter();

const route = useRoute();

const auth = useAuthStore();

const stars = ref(1);

const review = ref("");

const fetchData = async () => {
  try{
    const data = await entryServices.getEntryById(route.params.id);
    return data;
  }catch(e){
    alert(e)
    router.push({name: 'Entry', params: {id: route.params.id}});
  }
}

const submitRating = async () => {
  try{
    await userServices.addRating(route.params.id,{
      stars: stars.value,
      message: review.value,
      username: auth.user.username
    });
    router.push({name: 'EntryReview', params: {id: route.params.id}});
  }catch(e){
    alert(e)
  }
}

const data = await fetchData();



</script>

<style scoped>
h1 {
  font-size: 3rem;
}

img {
  width: 100%;
  height: auto;
}

button{
  background: var(--cf-main);
}


</style>