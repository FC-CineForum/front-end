<template>
    <div class="container">
        <div class="wrapper" @click="changeShowContent" :class="showContent? 'd-inline' : 'd-none'"></div>
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
    z-index: 2;
}
.wrapper{
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color:rgba(0, 0, 0, .0);
  position: fixed;
  z-index: 1;
}

</style>