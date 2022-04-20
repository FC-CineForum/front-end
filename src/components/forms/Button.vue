/* eslint-disable vue/multi-word-component-names */
<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: 10px;
  border: none;
  color: white;
  background-color: var(--color-background-main);
}
</style>
