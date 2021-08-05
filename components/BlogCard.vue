<template>
  <div class="blog-card">
    <div class="img">
      <img :src="`${$store.getters['env/domain']}${data.thumb}`" alt="">
    </div>
    <div class="title">{{ data.name }}</div>
    <p v-html="data.description"></p>
    <NuxtLink :to="url" tag="button" class="btn-secondary">Читать подробнее</NuxtLink>
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
