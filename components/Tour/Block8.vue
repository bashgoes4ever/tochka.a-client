<template>
  <section class="tour-block8">
    <div class="container">
      <h2 class="section__title">Ответы на часто задаваемые вопросы</h2>
      <div class="columns">
        <FAQItem
          v-for="item in data"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FAQItem from "@/components/Tour/FAQItem";

export default {
  name: "Block8",
  props: ['data'],
  components: {FAQItem}
}
</script>

<style scoped>

</style>
