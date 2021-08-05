<template>
  <div>
    <Breadcrumbs>
      <template v-slot:links>
        <NuxtLink to="/">Главная</NuxtLink>
        /
        <span>Туры</span>
      </template>
    </Breadcrumbs>
    <section class="tours-page">
      <div class="container">
        <h2 class="section__title">Туры</h2>
        <div class="grid">
          <BlogCard
            v-for="tour in tours"
            :key="tour.id"
            :data="tour"
            :tour="true"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
export default {
  name: "index",
  components: {Breadcrumbs, BlogCard},
  data: () => ({
    tours: []
  }),
  async fetch() {
    const {data} = await this.$axios({
      url: 'api/v1/tours',
      method: 'get'
    })

    this.tours = data.map(t => {
      return {
        thumb: t.card_thumb,
        name: t.short_name,
        description: t.short_description,
        slug: t.slug
      }
    })
  }
}
</script>

<style scoped>

</style>
