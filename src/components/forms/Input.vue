<template>
  <input
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script setup>
import { defineEmits } from "vue";

defineProps({
  type: {
    default: "text",
  },
  value: {
    required: true,
  },
  placeholder: {
    default: "",
  },
});

defineEmits(["update:value"]);
</script>

<style scoped>
input {
  border: none;
}
</style>
