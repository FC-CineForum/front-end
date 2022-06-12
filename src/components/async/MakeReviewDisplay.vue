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
            </div>
      </div>
      <div class="mx-5 mt-5">
        <h1>Reseña</h1>
        <CustomTextArea class="border border-dark container-fluid" placeholder="Titulo de la reseña" v-model:value="review" />
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import services from "@/services/entry.js";
import CustomTextArea from '../forms/TextArea.vue';


const router = useRouter();

const route = useRoute();

const fetchData = async () => {
  try{
    const data = await services.getEntryById(route.params.id);
    return data;
  }catch(e){
    alert(e)
    router.push({name: 'Entry', params: {id: route.params.id}});
  }
}

const data = await fetchData();

const review = ref("")

</script>

<style scoped>
h1 {
  font-size: 3rem;
}

img {
  width: 100%;
  height: auto;
}


</style>