<template>
  <section class="block4" v-if="$store.getters['blog/homePageArticles'].length > 0">
    <div class="container">
      <img src="/img/home/block4/bg.png" alt="" class="bg1">
      <h2 class="section__title">Узнайте <span>о самых интересных</span> <br>местах в Сочи</h2>
      <client-only>
        <div v-if="$vssWidth > 1170" class="block4__flex flex-between align-start">
          <BlogCard
            v-for="article in $store.getters['blog/homePageArticles']"
            :key="article.id"
            :data="article"
          />
        </div>
        <VueSlickCarousel
          class="slider"
          v-if="$vssWidth <= 1170"
          v-bind="opts"
          ref="slider"
        >
          <BlogCard
            v-for="article in $store.getters['blog/homePageArticles']"
            :key="article.id"
            :data="article"
          />
        </VueSlickCarousel>
        <div class="controls" v-if="$vssWidth <= 1170">
          <div class="prev" @click="prev">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 1L1.5 8L8.5 15" stroke="#858F9A" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="next" @click="next">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1L8.5 8L1.5 15" stroke="#858F9A" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </client-only>
    </div>
  </section>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import BlogCard from "~/components/BlogCard";

export default {
  name: "Block4",
  components: {BlogCard, VueSlickCarousel},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data: () => ({
    opts: {
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      infinite: true,
      slidesToShow: 1,
      swipe: true,
      touchMove: true,
      draggable: true,
      variableWidth: false
    },
  }),
  methods: {
    prev() {
      this.$refs.slider.prev()
    },
    next() {
      this.$refs.slider.next()
    }
  },
  async fetch() {
    await this.$store.dispatch("blog/getHomePageArticles")
  }
}
</script>

<style scoped>

</style>
