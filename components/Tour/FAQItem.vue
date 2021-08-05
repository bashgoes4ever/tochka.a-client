<template>
  <div class="faq-item">
    <div
      :class="[
        'head',
        {'active': active}
      ]"
      @click="active = !active"
    >
      {{ data.name }}
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.55671e-07 0.5L5 5.5L10 0.500001L6.55671e-07 0.5Z" fill="#20292D"/>
      </svg>
    </div>
    <div class="body" v-if="active">
      <p v-html="data.description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQItem",
  props: ['data'],
  data: () => ({
    active: false
  })
}
</script>

<style scoped>

</style>
