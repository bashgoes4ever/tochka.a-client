<template>
  <section class="tour-block2">
    <div class="container">
      <h2 class="section__title">Программа тура</h2>
      <div class="tabs-wrapper flex-between align-center">
        <div class="carousel-btn prev" @click="prev">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33341 13.666L0.666747 6.99935L7.33341 0.332683L7.33341 13.666Z" fill="#02979D"/>
          </svg>
        </div>
        <client-only>
          <div class="tabs flex-between" v-if="$vssWidth > 1170">
            <div
              @click="slideTo(index)"
              v-for="(day, index) in data"
              :key="day.id"
              :class="[
              'tab',
              {'active': currentDay === index}
            ]"
            >
              <span>{{ day.name }}</span>
            </div>
          </div>
          <VueSlickCarousel
            v-if="$vssWidth <= 1170"
            class="tabs"
            :arrows="false"
            :dots="false"
            :draggable="true"
            :swipe="true"
            :variableWidth="true"
            :adaptiveHeight="true"
            :infinite="false"
            ref="days"
          >
            <div
              @click="slideTo(index)"
              v-for="(day, index) in data"
              :key="day.id"
              :class="[
              'tab',
              {'active': currentDay === index}
            ]"
            >
              <span>{{ day.name }}</span>
            </div>
          </VueSlickCarousel>
        </client-only>
        <div class="carousel-btn next" @click="next">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666586 13.666L7.33325 6.99935L0.666587 0.332683L0.666586 13.666Z" fill="#02979D"/>
          </svg>
        </div>
      </div>
      <div class="carousel-wrapper">
        <client-only>
          <VueSlickCarousel
            v-bind="opts"
            ref="slider"
            @afterChange="slideDaysTo"
          >
            <div
              class="item flex-start"
              v-for="day in data"
              :key="day.id"
            >
              <div class="img">
                <img :src="`${$store.getters['env/domain']}${day.thumb}`" alt="">
              </div>
              <div class="text-wrapper">
                <div class="title">{{ day.name }}</div>
                <p v-html="day.description"></p>
              </div>
            </div>
          </VueSlickCarousel>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: "Block2",
  components: {VueSlickCarousel},
  props: ['data'],
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data: () => ({
    currentDay: 0,
    opts: {
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
      if (this.currentDay > 0) {
        this.$refs.slider.prev()
        this.currentDay = this.currentDay - 1
      }
    },
    next() {
      if (this.currentDay < this.data.length - 1) {
        this.$refs.slider.next()
        this.currentDay = this.currentDay + 1
      }
    },
    slideTo(slide) {
      this.$refs.slider.goTo(slide)
      this.currentDay = slide
    },
    slideDaysTo(i) {
      if (this.$vssWidth <= 1170) {
        this.$refs.days.goTo(i)
        this.currentDay = i
      }
    }
  }
}
</script>

<style scoped>

</style>
