<script lang="ts" setup>
definePageMeta({
  layout: false,
})
</script>

<template>
  <h1>產品</h1>
  <div class="product-card">
    <ProductCardImage
      imageSrc="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png"
      altText="享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢"
    />
    <ProductCardTitle title="尊爵雙人房" />
    <ProductCardPrice price="NT$10000" />
    <ProductCardButton buttonText="馬上預約" />
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}
</style>