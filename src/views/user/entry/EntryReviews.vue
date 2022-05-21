<template>
    <Header />
    <Suspense>
    <template #default>
      <Display />
    </template>
    <template #fallback>
      <div
        class="d-flex justify-content-center align-items-center"
        style="min-height: 90vh"
      >
        <div
          class="spinner-border mt-3"
          style="width: 4rem; height: 4rem"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Display from "@/components/async/EntryReviewDisplay.vue";
</script>

<style scoped>

</style>