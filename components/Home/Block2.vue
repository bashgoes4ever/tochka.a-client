<template>
  <section class="block2">
    <div class="container">
      <div class="flex-start">
        <div class="slider-wrapper">
          <client-only>
            <VueSlickCarousel
              class="slider"
              ref="slider"
              v-bind="opts"
              v-if="$vssWidth > 1170"
            >
              <div class="img">
                <img src="/img/home/block2/1.png" alt="">
              </div>
              <div class="img">
                <img src="/img/home/block2/1.png" alt="">
              </div>
              <div class="img">
                <img src="/img/home/block2/1.png" alt="">
              </div>
            </VueSlickCarousel>
          </client-only>
        </div>
        <div class="text-wrapper">
          <div class="title">Команда "Точка-А" предоставляет комплексные решения в сфере туризма, а также проката
            водного и наземного транспорта.
          </div>
          <client-only>
            <VueSlickCarousel
              class="slider"
              ref="slider"
              v-bind="opts"
              v-if="$vssWidth <= 1170"
            >
              <div class="img">
                <img src="/img/home/block2/1.png" alt="">
              </div>
              <div class="img">
                <img src="/img/home/block2/1.png" alt="">
              </div>
              <div class="img">
                <img src="/img/home/block2/1.png" alt="">
              </div>
            </VueSlickCarousel>
          </client-only>
          <p>Активный отдых или деловая поездка в Сочи? Наш сервис предлагает широкий спектр услуг: прокат
            туристического снаряжения от палаток и рюкзаков до газовых горелок, сопровождение опытных гидов по
            красивейшим туристическим маршрутам, аренду велосипедов, самокатов, мопедов, кабриолетов, водных скутеров и
            даже яхт! С нами отдых, путешествие или деловой визит будут яркими, комфортными и запоминающимися.</p>
          <div class="slider-opts">
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
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data: () => ({
    opts: {
      arrows: false,
      dots: false,
      touchMove: false,
      variableWidth: true,
      adaptiveHeight: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 1,
            swipe: true,
            touchMove: true,
            draggable: true,
            variableWidth: false
          }
        }
      ]
    },
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
