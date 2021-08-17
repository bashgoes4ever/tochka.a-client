<template>
  <section class="tour-block3">
    <div class="container">
      <h2 class="section__title">Как добраться</h2>
      <client-only>
        <p v-html="data.how_to_find"></p>
      </client-only>
      <ImageCarousel v-if="data.htfimgs.length > 0">
        <template v-slot:slides>
          <div
            class="img"
            v-for="(img, i) in data.htfimgs"
            :key="i"
          >
            <img :src="`${$store.getters['env/domain']}${img.thumb}`" alt="">
          </div>
        </template>
      </ImageCarousel>
    </div>
  </section>
</template>

<script>
import ImageCarousel from "@/components/Tour/ImageCarousel";

export default {
  name: "Block3",
  props: ['data'],
  components: {ImageCarousel}
}
</script>

<style scoped>

</style>
