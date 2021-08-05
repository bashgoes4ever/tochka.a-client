<template>
<section class="tour-block7">
  <div class="container">
    <h2 class="section__title">{{ title }}</h2>
    <div class="grid">
      <GuideCard
        v-for="guide in data"
        :key="guide.id"
        :data="guide"
      />
    </div>
  </div>
</section>
</template>

<script>
import GuideCard from "@/components/Tour/GuideCard";
export default {
  name: "Block7",
  props: ['data'],
  components: {GuideCard},
  computed: {
    title() {
      if (this.data.length === 1) {
        return 'Вас будет сопровождать 1 гид'
      }
      if (this.data.length > 2 && this.data.length < 5) {
        return `Вас будет сопровождать ${this.data.length} гида`
      }
      return `Вас будут сопровождать ${this.data.length} гидов`
    }
  }
}
</script>

<style scoped>

</style>
