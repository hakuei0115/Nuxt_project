<script setup>
const isLoading = ref(false);

function openLoading() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
}
</script>

<template>
  <button type="button" @click="openLoading">開啟 Loading 效果</button>
  <ClientOnly>
    <Loading v-model:active="isLoading" />
  </ClientOnly>
</template>

<style scoped></style>