<template>
  <div class="category-card">
    <img :src="`${$store.getters['env/domain']}${data.thumb}`" alt="">
    <div class="title" v-html="data.title"></div>
    <p v-if="data.description" v-html="data.description"></p>
    <ul v-if="data.categories.length > 0">
      <li
        v-for="category in data.categories"
        :key="category.id"
        class="category-link"
      >
        <NuxtLink :to="`/${category.base_category}/${category.slug}`"><span>{{category.name}}</span></NuxtLink>
      </li>
    </ul>
    <NuxtLink :to="link" class="link" v-if="data.show_link"><span>подробнее</span></NuxtLink>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ['data'],
  computed: {
    link() {
      return this.data.custom_link ? `${this.data.custom_link}` : `/${this.data.base_category}`
    }
  }
}
</script>

<style scoped>

</style>
