<template>
  <div v-if="product">
    <Breadcrumbs>
      <template v-slot:links>
        <NuxtLink to="/">Главная</NuxtLink>
        /
        <NuxtLink :to="`/${product.category.base_category}`">Каталог</NuxtLink>
        /
        <NuxtLink :to="`/${product.category.base_category}/${product.category.slug}`">{{
            product.category.name
          }}
        </NuxtLink>
        /
        <span>{{ product.name }}</span>
      </template>
    </Breadcrumbs>
    <section class="product-detail">
      <div class="container">
        <div class="flex-between align-start">
          <client-only>
            <div v-if="$vssWidth > 1170" class="left flex-start align-start">
              <VueSlickCarousel
                v-bind="carouselSettings"
                class="detail-product__slider"
              >
                <div
                  class="img"
                  :key="i"
                  @click="currentImage = `${$store.getters['env/domain']}${img.thumb}`"
                  v-for="(img, i) in product.images"
                >
                  <img :src="`${$store.getters['env/domain']}${img.thumb}`" alt="">
                </div>
              </VueSlickCarousel>
              <div class="main-img">
                <img :src="currentImage" alt="">
              </div>
            </div>
          </client-only>
          <div class="right">
            <h2 class="section__title">{{ product.name }}</h2>
            <client-only>
              <div v-if="$vssWidth <= 1170" class="left flex-start align-start">
                <VueSlickCarousel
                  v-bind="carouselMobileSettings"
                  class="detail-product__slider-m"
                  ref="slider"
                >
                  <div
                    class="img"
                    :key="i"
                    @click="currentImage = `${$store.getters['env/domain']}${img.thumb}`"
                    v-for="(img, i) in product.images"
                  >
                    <img :src="`${$store.getters['env/domain']}${img.thumb}`" alt="">
                  </div>
                </VueSlickCarousel>
                <div @click="prev" class="carousel-btn prev">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 1L1.5 8L8.5 15" stroke="#858F9A" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </div>
                <div @click="next" class="carousel-btn next">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1L8.5 8L1.5 15" stroke="#858F9A" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </client-only>
            <div class="price-wrapper flex-start align-end">
              <div class="price">{{ product.price }} ₽</div>
              <div class="old-price" v-if="product.old_price">{{ product.old_price }} ₽</div>
            </div>
            <button v-if="!isInBasket" class="btn" @click="addToBasket">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.918604 0.674399L0.850973 0.667325C0.604851 0.658328 0.383828 0.832381 0.340658 1.0818L0.333585 1.14943C0.324588 1.39556 0.498641 1.61658 0.748063 1.65975L1.75407 1.83374L2.36375 9.09756L2.37637 9.20673C2.49904 10.035 3.21147 10.6577 4.06 10.6577H11.3347L11.4442 10.6543C12.2418 10.6033 12.9031 10.0002 13.0195 9.19895L13.6522 4.82668L13.6631 4.72625C13.7213 3.92687 13.0881 3.23307 12.2727 3.23307H2.87473L2.71825 1.36525L2.70645 1.29135C2.66083 1.09914 2.50457 0.948893 2.30527 0.914399L0.918604 0.674399ZM3.98271 9.65353C3.65253 9.61738 3.38847 9.35223 3.36027 9.01417L2.95873 4.23307H12.2727L12.3314 4.2374C12.5419 4.26869 12.694 4.46554 12.6625 4.68351L12.0298 9.05547L12.0139 9.13364C11.9337 9.43934 11.6567 9.65774 11.3347 9.65774H4.06L3.98271 9.65353ZM2.93892 12.724C2.93892 12.1666 3.3907 11.714 3.94825 11.714C4.50573 11.714 4.95825 12.1665 4.95825 12.724C4.95825 13.2815 4.50565 13.7333 3.94825 13.7333C3.39078 13.7333 2.93892 13.2815 2.93892 12.724ZM10.4399 12.724C10.4399 12.1665 10.8924 11.714 11.4499 11.714C12.0073 11.714 12.4599 12.1665 12.4599 12.724C12.4599 13.2815 12.0073 13.7333 11.4499 13.7333C10.8925 13.7333 10.4399 13.2815 10.4399 12.724ZM10.7657 6.19706C10.7657 5.92092 10.5418 5.69706 10.2657 5.69706H8.41701L8.34916 5.70162C8.10511 5.73473 7.91701 5.94393 7.91701 6.19706C7.91701 6.4732 8.14086 6.69706 8.41701 6.69706H10.2657L10.3335 6.6925C10.5776 6.65939 10.7657 6.45019 10.7657 6.19706Z" fill="#02979D"/>
</svg>
              забронировать
            </button>

            <QuantityInput
              v-if="isInBasket"
              :max_value='$store.getters["basket/basket"].find(p => p.product.id === product.id).max_value'
              :value='$store.getters["basket/basket"].find(p => p.product.id === product.id).quantity'
              @input="updateQuantity"
            />

            <ProductTabs
              :product="product"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="similar-products"
             v-if="$store.getters['products/products'].filter(p => p.id !== product.id).length > 0">
      <div class="container">
        <h2 class="section__title">Возможно вам понравятся другие товары</h2>
        <div class="grid">
          <ProductCard
            v-for="product in $store.getters['products/products'].filter(p => p.id !== product.id)"
            :key="product.id"
            :data="product"
          ></ProductCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import _ from 'lodash'
import QuantityInput from "@/components/QuantityInput";
import Breadcrumbs from "~/components/Breadcrumbs";
import ProductTabs from "~/components/Shop/ProductTabs";
import ProductCard from "~/components/Shop/ProductCard";

export default {
  name: "SingleProduct",
  components: {Breadcrumbs, VueSlickCarousel, ProductTabs, ProductCard, QuantityInput},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data: () => ({
    carouselSettings: {
      verticalSwiping: true,
      vertical: true,
      slidesToShow: 4,
      dots: false,
      arrows: false,
    },
    carouselMobileSettings: {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      arrows: false
    },
    product: null,
    currentImage: null
  }),
  methods: {
    prev() {
      this.$refs.slider.prev()
    },
    next() {
      this.$refs.slider.next()
    },
    async addToBasket() {
      await this.$store.dispatch("basket/addProductToBasket", this.product)
      await this.$store.dispatch('notifications/createNotification', 'Товар добавлен в корзину')
    },
    updateQuantity(val) {
      this.$store.dispatch('basket/changeProductQuantityClient', {
        productId: this.$store.getters["basket/basket"].find(p => p.product.id === this.product.id).id,
        quantity: val
      })
      this.updateQuantityServer(this.$store.getters["basket/basket"].find(p => p.product.id === this.product.id).quantity)
    },
    updateQuantityServer: _.debounce(function (quantity) {
      this.$store.dispatch('basket/changeProductQuantity', {
        productId: this.$store.getters["basket/basket"].find(p => p.product.id === this.product.id).id,
        quantity
      })
    }, 500),
  },
  computed: {
    isInBasket() {
      return this.$store.getters["basket/basket"].some(item => item.product.id === this.product.id)
    },
  },
  async fetch() {
    const {data} = await this.$axios({
      url: `/api/v1/shop/product/${this.$route.params.slug}`,
      method: 'GET'
    })
    this.product = data
    this.currentImage = `${this.$store.getters['env/domain']}${data.images[0].thumb}`

    await this.$store.dispatch("products/getProducts", {
      baseCategory: data.category.base_category,
      subCategory: data.category.slug
    })
  }
}
</script>

<style scoped>

</style>
