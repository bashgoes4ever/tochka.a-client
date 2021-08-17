<template>
  <section class="tour-block3 tour-block4">
    <div class="container">
      <h2 class="section__title">Интересные места</h2>
      <client-only>
        <p v-html="data.interesting_places"></p>
      </client-only>
      <ImageCarousel v-if="data.itimgs.length > 0">
        <template v-slot:slides>
          <div
            class="img"
            v-for="(img, i) in data.itimgs"
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
  name: "Block4",
  props: ['data'],
  components: {ImageCarousel}
}
</script>

<style scoped>

</style>
