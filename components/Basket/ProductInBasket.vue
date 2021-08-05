<template>
  <div class="basket-item flex-start align-start">
    <div class="img">
      <img v-if="data.product.images" :src="`${$store.getters['env/domain']}${data.product.images[0].thumb}`" alt="">
    </div>
    <div class="basket-item__right">
      <div class="title">{{ data.product.name }}</div>
      <div class="price-wrapper flex-start align-end">
        <div class="price">{{ data.product.price }} ₽</div>
        <div class="old-price" v-if="data.product.old_price">{{ data.product.old_price }} ₽</div>
      </div>
      <div class="controls flex-start align-center">
        <QuantityInput
          :max_value="data.max_value"
          :value="data.quantity"
          @input="updateQuantity"
        />
        <div class="product-remove" @click="$store.dispatch('basket/removeProductFromBasket', data.id)">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 0.333496H4C3.26467 0.333496 2.66667 0.931496 2.66667 1.66683V2.3335H0V3.66683H1.33333V12.3335C1.33333 13.0688 1.93133 13.6668 2.66667 13.6668H9.33333C10.0687 13.6668 10.6667 13.0688 10.6667 12.3335V3.66683H12V2.3335H9.33333V1.66683C9.33333 0.931496 8.73533 0.333496 8 0.333496ZM4 1.66683H8V2.3335H4V1.66683ZM9.33333 12.3335H2.66667V3.66683H9.33333V12.3335Z"
              fill="#EB5757"/>
            <path d="M4 5.00016H5.33333V11.0002H4V5.00016Z" fill="#EB5757"/>
            <path d="M6.66667 5.00016H8V11.0002H6.66667V5.00016Z" fill="#EB5757"/>
          </svg>
        </div>
      </div>
    <div class="basket-item__errors" v-if="data.error">
      <div class="basket-item__error" v-if="data.max_value > 0">На выбранные даты {{ productsString }} товара.</div>
      <div class="basket-item__error" v-if="data.max_value === 0">К сожалению, данного товара нет в наличии на выбранные вами даты.</div>
    </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import QuantityInput from "@/components/QuantityInput";

export default {
  name: "ProductInBasket",
  props: ['data'],
  components: {QuantityInput},
  computed: {
    productsString() {
      if (this.data.max_value === 1) {
        return 'доступна 1 единица'
      }
      if (this.data.max_value > 1 && this.data.max_value < 5) {
        return `доступны ${this.data.max_value} единицы`
      }
      return `доступно ${this.data.max_value} единиц`
    }
  },
  methods: {
    updateQuantity(val) {
      this.$store.dispatch('basket/changeProductQuantityClient', {
        productId: this.data.id,
        quantity: val
      })
      this.updateQuantityServer(this.data.quantity)
    },
    updateQuantityServer: _.debounce(function (quantity) {
      this.$store.dispatch('basket/changeProductQuantity', {
        productId: this.data.id,
        quantity
      })
    }, 500),
  }
}
</script>

<style scoped>

</style>
