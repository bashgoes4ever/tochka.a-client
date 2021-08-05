<template>
  <article class="blog-article">
    <div v-if="$store.getters['blog/currentArticle']">
      <h2 class="section__title">{{ $store.getters["blog/currentArticle"].name }}</h2>
      <div class="blog-img"><img :src="`${$store.getters['env/domain']}${$store.getters['blog/currentArticle'].thumb}`" alt=""></div>
      <div v-html='$store.getters["blog/currentArticle"].content1'></div>
      <ImageCarousel v-if='$store.getters["blog/currentArticle"].images.length > 0'>
        <template v-slot:slides>
          <div
            class="img"
            v-for='img in $store.getters["blog/currentArticle"].images'
            :key="img.id"
          >
            <img :src="`${$store.getters['env/domain']}${img.thumb}`" alt="">
          </div>
        </template>
      </ImageCarousel>
      <div v-html='$store.getters["blog/currentArticle"].content2'></div>
    </div>
  </article>
</template>

<script>
import ImageCarousel from "@/components/Tour/ImageCarousel";

export default {
  name: "Article",
  components: {ImageCarousel}
}
</script>

<style scoped>

</style>
