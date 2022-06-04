<template>
    <div>
        <div class="m-0 mt-4 container-fluid row d-flex justify-content-center">
            <div class="col-8 col-md-7  col-lg-3">
                <img :src="entry.image" alt="poster">
            </div>
            <div class="col-8 col-md-7 col-lg-7 d-flex flex-column">
                <div class="d-flex flex-row justify-content-between">
                    <h1 class="h1"><span class="fw-bold">{{entry.title}}</span> <span class="fw-light">({{entry.release}})</span></h1>
                    <div class="pointer">
                         <router-link to="/entry/reviews/new"><i class="fas fa-plus fa-2x text-white rounded-circle p-2" style="background:var(--color-background-main)"></i></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid mt-4">
            <Review v-for="review in entry.ratings" :review="review" class="mb-4"/>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import Review from "@/components/Review.vue"
import services from "@/services/entry.js";


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

const entry = await fetchData();

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