<template>
  <div class="flex-between align-center image-carousel-wrapper">
    <div class="carousel-btn prev" @click="prev">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33341 13.666L0.666747 6.99935L7.33341 0.332683L7.33341 13.666Z" fill="#02979D"/>
      </svg>
    </div>
    <VueSlickCarousel
      ref="slider"
      v-bind="opts"
      class="carousel"
    >
      <slot name="slides"></slot>
    </VueSlickCarousel>
    <div class="carousel-btn next" @click="next">
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666586 13.666L7.33325 6.99935L0.666587 0.332683L0.666586 13.666Z" fill="#02979D"/>
      </svg>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: "ImageCarousel",
  components: {VueSlickCarousel},
  props: ['slides'],
  created() {
    if (this.slides) {
      this.opts.slidesToShow = this.slides
    }
  },
  data: () => ({
    opts: {
      slidesToShow: 2,
      arrows: false,
      dots: false,
      touchMove: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 1,
            swipe: true,
            touchMove: true,
            draggable: true,
          }
        }
      ]
    }
  }),
  methods: {
    prev() {
      this.$refs.slider.prev()
    },
    next() {
      this.$refs.slider.next()
    }
  }
}
</script>

<style scoped>

</style>
