<template>
  <div class="guide-card flex-start">
    <div class="img">
      <img :src="`${$store.getters['env/domain']}${data.thumb}`" alt="">
    </div>
    <div class="text-wrapper">
      <div class="title">{{ data.name }}</div>
      <client-only>
        <p v-html="data.description"></p>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideCard",
  props: ['data']
}
</script>

<style scoped>

</style>
