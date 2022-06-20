<template>
    <div v-if="show" class="wrapper full-screen position-fixed">
        <div class="row">
            <div class="bg-white m-5 p-4 col-12 col-md-10 rounded mx-auto">
            <div class="d-flex justify-content-end m-5">
                <i @click="$emit('update:show',false)" class="fas fa-times fa-lg pointer"></i>
            </div>
            <div class="content w-full h-full">
                <slot></slot>
            </div>
       </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from "vue";
defineProps({
    show: {
        type: Boolean,
        required: true,
    }
});
defineEmits(["update:show"])
</script>

<style scoped>
.wrapper{
    background-color: rgba(0, 0, 0, .5);
}

.w-full{
    width: 100%;
}

.h-full{
    height: 100%;
}

.full-screen{
    width: 100vw;
    height: 100vh;
    z-index: 10;
}
</style>