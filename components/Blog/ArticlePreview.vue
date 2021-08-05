<template>
  <div
    :class="[
      'article-preview',
      {'active': active}
    ]"
  >
    <div class="title">{{ data.name }}</div>
    <p v-html="data.description"></p>
  </div>
</template>

<script>
export default {
  name: "ArticlePreview",
  props: ['active', 'data']
}
</script>

<style scoped>

</style>
