<template>
  <section class="shop-block">
    <div class="container">
      <h2 class="section__title">
        <slot name="title"></slot>
      </h2>
      <client-only>
        <div
          v-if="$vssWidth > 1170"
          class="tabs flex-between"
        >
          <slot name="tabs"></slot>
        </div>
        <VueSlickCarousel
          v-if="$vssWidth <= 1170 && $store.getters['products/categories'].length > 0"
          class="tabs"
          :arrows="false"
          :dots="false"
          :draggable="true"
          :swipe="true"
          :variableWidth="true"
          :adaptiveHeight="true"
        >
          <slot name="tabs"></slot>
        </VueSlickCarousel>
      </client-only>
      <div class="flex-between align-start content-flex" id="shop-content">

        <div v-if="$slots.filters" class="filters">
          <div class="title">
            Фильтры
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <div class="filters-list">
            <slot name="filters"></slot>
          </div>
        </div>

        <div class="products-wrapper">
          <div class="products">
            <slot name="products"></slot>
          </div>
          <slot name="pagination"></slot>
          <h2 class="section__title">
            <slot name="bottom-title"></slot>
          </h2>
          <slot name="bottom-text"></slot>
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
  name: "ShopBlock",
  components: {VueSlickCarousel},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
