<template>
  <div>
    <Breadcrumbs>
      <template v-slot:links>
        <NuxtLink to="/">Главная</NuxtLink>
        /
        <span>Блог</span>
      </template>
    </Breadcrumbs>
    <section class="blog-page">
      <div class="container">
        <div class="blog-flex flex-between">
          <Article />
          <BlogMenu />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import Article from "@/components/Blog/Article";
import BlogMenu from "@/components/Blog/BlogMenu";

export default {
  name: "blog",
  layout: 'default',
  components: {Breadcrumbs, Article, BlogMenu},
  async fetch() {
    await this.$store.dispatch('blog/getTags')
  }
}
</script>

<style scoped>

</style>
