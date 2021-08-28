<template>
  <div class="blog-card">
    <div class="img">
      <img :src="`${$store.getters['env/domain']}${data.thumb}`" alt="">
    </div>
    <div class="title">{{ data.name }}</div>
    <client-only>
      <p v-html="data.description"></p>
    </client-only>
    <NuxtLink :to="url" tag="button" class="btn">Читать подробнее</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ["data", 'tour'],
  computed: {
    url() {
      if (this.tour) {
        return `/tours/${this.data.slug}`
      }
      return `/blog/?id=${this.data.id}`
    }
  }
}
</script>

<style scoped>

</style>
