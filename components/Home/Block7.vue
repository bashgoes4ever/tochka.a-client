<template>
  <section
    :class="[
    'block7',
    {'reviews-page': padding}
  ]"
  >
    <div class="container">
      <h2 class="section__title">Посмотрите <span>отзывы</span> <br>наших клиентов</h2>
      <img src="/img/home/block7/bg.png" alt="" class="phone">
      <client-only>
        <VueSlickCarousel
          class="slider"
          ref="slider"
          v-bind="opts"
          v-if="images.length > 0"
        >
          <div
            v-for="img in images"
            :key="img.id"
            class="img"
          >
            <img :src="`${$store.getters['env/domain']}${img.thumb}`" alt="">
          </div>
        </VueSlickCarousel>
      </client-only>
      <div class="slider-btns">
        <div class="slider-btn prev" @click="prev">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33341 13.6663L0.666747 6.99959L7.33341 0.332927L7.33341 13.6663Z" fill="#02979D"/>
          </svg>
        </div>
        <div class="slider-btn next" @click="next">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666586 13.6663L7.33325 6.99959L0.666587 0.332927L0.666586 13.6663Z" fill="#02979D"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: "Block7",
  props: ['padding'],
  components: {VueSlickCarousel},
  data: () => ({
    opts: {
      arrows: false,
      dots: false,
      touchMove: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 1,
            swipe: true,
            touchMove: true,
            draggable: true,
            centerMode: false,
            variableWidth: false,
          }
        }
      ]
    },
    images: []
  }),
  methods: {
    prev() {
      this.$refs.slider.prev()
    },
    next() {
      this.$refs.slider.next()
    }
  },
  async fetch() {
    const {data} = await this.$axios({
      url: 'api/v1/reviews/',
      method: 'GET'
    })
    this.images = data
  }
}
</script>

<style scoped>

</style>
