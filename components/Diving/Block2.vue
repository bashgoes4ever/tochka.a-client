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
                <img src="/img/diving/1.png" alt="">
              </div>
              <div class="img">
                <img src="/img/diving/1.png" alt="">
              </div>
              <div class="img">
                <img src="/img/diving/1.png" alt="">
              </div>
            </VueSlickCarousel>
          </client-only>
        </div>
        <div class="text-wrapper">
          <div class="title">Ощутите погружение <br>на дно моря
          </div>
          <client-only>
            <VueSlickCarousel
              class="slider"
              ref="slider"
              v-bind="opts"
              v-if="$vssWidth <= 1170"
            >
              <div class="img">
                <img src="/img/diving/1.png" alt="">
              </div>
              <div class="img">
                <img src="/img/diving/1.png" alt="">
              </div>
              <div class="img">
                <img src="/img/diving/1.png" alt="">
              </div>
            </VueSlickCarousel>
          </client-only>
          <div class="price flex-start align-center">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8461 3.58787H13.6668C13.6668 1.32306 12.3098 0 10.0105 0H3.98979C1.69053 0 0.333496 1.32306 0.333496 3.55898V8.44102C0.333496 10.6769 1.69053 12 3.98979 12H10.0105C12.3098 12 13.6668 10.6769 13.6668 8.44102V8.23303H10.8461C9.53697 8.23303 8.47572 7.19835 8.47572 5.922C8.47572 4.64566 9.53697 3.61098 10.8461 3.61098V3.58787ZM10.846 4.5814H13.169C13.4439 4.5814 13.6668 4.79868 13.6668 5.06671V6.75376C13.6636 7.02049 13.4426 7.23596 13.169 7.23908H10.8993C10.2366 7.24777 9.65708 6.80537 9.50675 6.176C9.43147 5.78532 9.53715 5.38217 9.79547 5.0746C10.0538 4.76703 10.4383 4.5865 10.846 4.5814ZM10.9468 6.3551H11.166C11.4475 6.3551 11.6756 6.13265 11.6756 5.85823C11.6756 5.58382 11.4475 5.36136 11.166 5.36136H10.9468C10.8121 5.35982 10.6825 5.41088 10.5868 5.50314C10.491 5.59541 10.4371 5.7212 10.4371 5.85246C10.4371 6.12782 10.6643 6.35194 10.9468 6.3551ZM3.49208 3.58805H7.25504C7.5365 3.58805 7.76467 3.3656 7.76467 3.09118C7.76467 2.81677 7.5365 2.59431 7.25504 2.59431H3.49208C3.21292 2.5943 2.98569 2.81325 2.98245 3.08541C2.98243 3.36077 3.20966 3.58489 3.49208 3.58805Z" fill="#02979D"/>
</svg>
            <span>Стоимость 3000 руб.</span>
          </div>
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
