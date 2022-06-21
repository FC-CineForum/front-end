<template>
    <div>
        <h1></h1>
    </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from "vue"
import { useAuthStore } from "@/stores/auth";
import playlistServices from "@/services/playlist.js";

const playlist = reactive({value:{}})

onBeforeMount(async()=>{
    const data = playlistServices.getPlaylistByInfo()
})


</script>

<style scoped>

</style>