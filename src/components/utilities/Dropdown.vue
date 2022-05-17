<template>
    <div class="container">
        <div @click="changeShowContent">
            <slot name="toggle"/>
        </div>
        <div class="content" :class="showContent? 'd-inline' : 'd-none'" >
            <slot name="menu"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const showContent = ref(false)

const changeShowContent = ()=>{
    showContent.value = !showContent.value;
}

</script>

<style scoped>
.container{
    position: relative;
    display:inline-block;
}

.content{
    position: absolute;
    right: 0;
}
</style>