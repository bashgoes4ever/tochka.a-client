<template>
  <div>
    <Breadcrumbs>
      <template v-slot:links>
        <NuxtLink to="/">Главная</NuxtLink>
        /
        <span>Фотогалерея</span>
      </template>
    </Breadcrumbs>
    <section class="gallery-wrapper">
      <div class="container">
        <h2 class="section__title">Фотогалерея</h2>
        <client-only>
          <div v-if="this.$vssWidth > 1170" class="tabs flex-between">
            <NuxtLink
              active-class="active"
              class="tab"
              v-for="category in categories"
              :key="category.id"
              :to="`/gallery/${category.slug}`"
            ><span>{{ category.name }}</span></NuxtLink>
          </div>
          <VueSlickCarousel
            v-if="this.$vssWidth <= 1170 && categories.length > 0"
            class="tabs"
            :arrows="false"
            :dots="false"
            :draggable="true"
            :swipe="true"
            :variableWidth="true"
            :adaptiveHeight="true"
          >
            <NuxtLink
              active-class="active"
              class="tab"
              v-for="category in categories"
              :key="category.id"
              :to="`/gallery/${category.slug}`"
            >
              <span>{{ category.name }}</span>
            </NuxtLink>
          </VueSlickCarousel>
        </client-only>
        <div class="gallery-items">

          <a
            :href="`${$store.getters['env/domain']}${img.image}`"
            target="_blank"
            class="gallery-item"
            v-for="img in images"
            :key="img.id"
          >
            <img :src="`${$store.getters['env/domain']}${img.thumb}`" alt="">
          </a>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  name: "gallery",
  layout: 'default',
  components: {Breadcrumbs, VueSlickCarousel},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data: () => ({
    categories: [],
    images: []
  }),
  async fetch() {
    const categories = await this.$axios({
      url: '/api/v1/gallery/categories/',
      method: "GET"
    })
    this.categories = categories.data

    const url = this.$route.params.slug ? `/api/v1/gallery/images/${this.$route.params.slug}` : '/api/v1/gallery/images/'
    const images = await this.$axios({
      url,
      method: "GET"
    })
    this.images = images.data
  }
}
</script>

<style scoped>

</style>
