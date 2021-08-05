<template>
  <aside class="blog-menu">
    <div class="title menu-title">Рубрики</div>
    <div class="blog-tags" v-if="$store.getters['blog/tags'].length > 0">
      <div
        v-for="tag in $store.getters['blog/tags']"
        @click="currentTagId = tag.id"
        :key="tag.id"
        :class="[
        'blog-tag',
        {'active': tag.id === currentTagId}
      ]"
      >
        <span>{{ tag.name }}</span>
      </div>
    </div>
    <client-only v-if="$store.getters['blog/articles'].length > 0">
      <div class="blog-articles" v-if="$vssWidth > 1170">
        <div
          class="article-preview-wrapper"
          v-for="article in $store.getters['blog/articles']"
          :key="article.id"
          @click="currentArticleId = article.id"
        >
            <ArticlePreview
              :data="article"
              :active="article.id === currentArticleId"
            />
        </div>
      </div>
      <VueSlickCarousel
        v-if="$vssWidth <= 1170"
        class="blog-articles"
        :arrows="false"
        :dots="false"
        :draggable="true"
        :swipe="true"
        :infinite="true"
        :variableWidth="true"
        ref="slider"
      >
        <div
          class="article-preview-wrapper"
          v-for="article in $store.getters['blog/articles']"
          :key="article.id"
          @click="currentArticleId = article.id"
        >
            <ArticlePreview
              :data="article"
              :active="article.id === currentArticleId"
            />
        </div>
      </VueSlickCarousel>
    </client-only>
  </aside>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import ArticlePreview from "@/components/Blog/ArticlePreview";

export default {
  name: "BlogMenu",
  components: {ArticlePreview, VueSlickCarousel},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data: () => ({
    currentTagId: null,
    currentArticleId: null
  }),
  created() {
    if (this.$route.query.id) {
      this.currentArticleId = this.$route.query.id
    }
  },
  watch: {
    currentTagId: function () {
      this.$store.dispatch("blog/getBlogArticles", this.currentTagId)
    },
    currentArticleId: function () {
      this.$store.dispatch("blog/getArticle", this.currentArticleId)
    }
  }
}
</script>

<style scoped>

</style>
