<template>
  <section class="block6">
    <div class="container">
      <img src="/img/home/block6/bg1.png" alt="" class="bg1">
      <h2 class="section__title">Хотите сделать <span>ваш <br>отдых</span> незабываемым ?</h2>
      <client-only>
        <div class="block6__flex flex-between" v-if="categories.length > 0">
          <CategoryCard
            v-for="category in categories"
            :key="category.id"
            :data="category"
          />
        </div>
      </client-only>
    </div>
  </section>
</template>

<script>
import CategoryCard from "~/components/Home/CategoryCard";

export default {
  name: "Block6",
  components: {CategoryCard},
  async fetch() {
    const {data} = await this.$axios({
      url: `/api/v1/categories/`,
      method: 'GET'
    })
    this.categories = data
  },
  data: () => ({
    categories: []
  })
}
</script>

<style scoped>

</style>
