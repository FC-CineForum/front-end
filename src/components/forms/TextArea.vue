<template>
    <textarea :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)"></textarea>
</template>

<script setup>
import { defineEmits } from "vue";
defineProps({
    value:{
        required:true
    },
    placeholder:{
        default: "Ingrese texto"
    }
})
</script>

<style scoped>
textarea{
    border: none;
    width: 100%;
    outline: none;
}

</style>