<template>
  <section class="tour-block3 tour-block5 tour-block6">
    <div class="container">
      <h2 class="section__title">Что будем брать с собой</h2>
      <client-only>
        <p v-html="data.inventory_text"></p>
      </client-only>
      <ImageCarousel :slides="3" v-if="data.inventory_imgs.length > 0">
        <template v-slot:slides>
          <div
            class="img"
            v-for="(img, i) in data.inventory_imgs"
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
  name: "Block6",
  props: ['data'],
  components: {ImageCarousel}
}
</script>

<style scoped>

</style>
