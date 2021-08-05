<template>
  <NuxtLink class="category-card" :to="data.url">
    <img :src="data.src" alt="">
    <div class="title">{{data.title}}</div>
    <div class="link"><span>подробнее</span></div>
  </NuxtLink>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ['data']
}
</script>

<style scoped>

</style>
