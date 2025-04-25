<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/Day1">Day1</NuxtLink>
      <NuxtLink to="/Day2">Day2</NuxtLink>
      <NuxtLink to="/Day3">Day3</NuxtLink>
      <NuxtLink to="/Day4">Day4</NuxtLink>
      <NuxtLink to="/Day5">Day5</NuxtLink>
      <NuxtLink to="/Day6">Day6</NuxtLink>
      <NuxtLink to="/Day6/room">Day6's room</NuxtLink>
      <NuxtLink to="/Day7">Day7</NuxtLink>
      <NuxtLink to="/Day8">Day8</NuxtLink>
      <NuxtLink to="/Day9">Day9</NuxtLink>
      <NuxtLink to="/Day10">Day10</NuxtLink>
      <NuxtLink to="/Day11">Day11</NuxtLink>
      <NuxtLink to="/Day12">Day12</NuxtLink>
      <NuxtLink to="/Day13">Day13</NuxtLink>
    </nav>
  </header>
  <slot />
</template>

<style lang="scss" scoped>
header {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

nav {
  display: flex;
  gap: 20px;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  justify-content: center;

  & a {
    text-decoration: none;
    color: #333;
  }

  & a:hover {
    color: #007bff;
  }
}
</style>