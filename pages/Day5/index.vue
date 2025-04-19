<script setup>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
const { newsList, isLoading, getNewList } = useHome();

onMounted(() => {
  getNewList();
  isLoading.value = true;
});
</script>

<template>
  <div class="container">
    <h1>最新消息</h1>
    <NewsCard v-for="list in newsList" :key="list._id"  v-bind="list" />

    <ClientOnly>
      <Loading v-model:active="isLoading" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>