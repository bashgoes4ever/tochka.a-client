<template>
  <div>
    <Breadcrumbs>
      <template v-slot:links>
        <NuxtLink to="/">Главная</NuxtLink>
        /
        <span>Корзина</span>
      </template>
    </Breadcrumbs>

    <section class="basket">
      <div class="container">
        <div class="basket-flex flex-between align-start">
          <div class="left">
            <div class="head">{{ productsString }} в корзине</div>
            <div class="products">
              <ProductInBasket
                v-for='product in $store.getters["basket/basket"]'
                :key="product.id"
                :data="product"
              />
            </div>
            <div class="basket-total">
              <div v-if='totalDiscount' class="total-discount flex-between">
                <span>Сумма скидки</span>
                <span>{{ totalDiscount - totalPrice }} руб.</span>
              </div>
              <div class="total-price flex-between" v-if="totalPrice">
                <span>Итого</span>
                <div class="flex-start align-end">
                  <div class="old-price" v-if='$store.getters["basket/totalDiscount"]'>
                    {{ totalDiscount }} руб.
                  </div>
                  <span>{{ totalPrice }} руб.</span>
                </div>
              </div>
            </div>
          </div>
          <form class="right">
            <div class="title">Оформить заказ</div>
            <date-picker
              valueType="timestamp"
              @change="$store.dispatch('basket/checkAvailability', {
                from: form.date[0],
                to: form.date[1]
              })"
              v-model="form.date"
              input-class="date-picker"
              :disabled-date="disableDate"
              format="DD MMMM"
              range-separator=" - "
              type="date"
              range
              placeholder="Даты бронирования"
            ></date-picker>
            <input type="text" placeholder="Имя" v-model="form.name">
            <input type="text" placeholder="Телефон*" v-model="form.phone">
            <input type="text" placeholder="Email*" v-model="form.email">
            <textarea placeholder="Комментарий к заказу" v-model="form.comment"></textarea>
            <div class="title payment-title">Выберите способ оплаты</div>
            <FilterCheckbox :group="payment" v-model="payment.bank_card">Банковская карта</FilterCheckbox>
            <FilterCheckbox :group="payment" v-model="payment.cash_courier">Наличными курьеру</FilterCheckbox>
            <FilterCheckbox :group="payment" v-model="payment.cash_shop">Наличными в магазине</FilterCheckbox>
            <button @click="createOrder" class="btn">оформить заказ</button>
            <div class="form-postscript">Нажимая на кнопку выше, вы даете свое согласие на <a href="/static/personal-data.pdf" target="_blank">обработку
              персональных данных</a><br><a href="/static/politics.pdf">Политика обработки персональных данных</a></div>
          </form>
        </div>
      </div>
    </section>

    <section class="similar-products" v-if="$store.getters['products/products'].length > 0">
      <div class="container">
        <h2 class="section__title">Возможно вам понравятся другие товары</h2>
        <div class="grid">
          <ProductCard
            v-for="product in $store.getters['products/products']"
            :key="product.id"
            :data="product"
          ></ProductCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ru';
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/Shop/ProductCard";
import ProductInBasket from "@/components/Basket/ProductInBasket";
import FilterCheckbox from "@/components/Shop/FilterCheckbox";

export default {
  name: "basket",
  components: {Breadcrumbs, ProductCard, ProductInBasket, FilterCheckbox, DatePicker},
  computed: {
    productsString() {
      if (this.$store.getters["basket/totalProducts"] === 1) {
        return '1 товар'
      }
      if (this.$store.getters["basket/totalProducts"] > 1 && this.$store.getters["basket/totalProducts"] < 5) {
        return `${this.$store.getters["basket/totalProducts"]} товара`
      }
      return `${this.$store.getters["basket/totalProducts"]} товаров`
    },
    totalPrice() {
      if (this.form.date) {
        return this.$store.getters["basket/totalPrice"] * (this.form.date[1] - this.form.date[0]) / 1000 / 60 / 60 / 24
      }
      return null
    },
    totalDiscount() {
      if (this.form.date) {
        return (this.$store.getters["basket/totalPrice"] + this.$store.getters["basket/totalDiscount"]) * (this.form.date[1] - this.form.date[0]) / 1000 / 60 / 60 / 24
      }
      return null
    }
  },
  methods: {
    disableDate(date) {
      const today = new Date()
      return date < today.setDate(today.getDate() - 1);
    },
    async createOrder(e) {
      e.preventDefault()
      const payment = Object.keys(this.payment).find(k => this.payment[k] === true)
      await this.$store.dispatch('popup/enableLoading')
      const data = await this.$store.dispatch("basket/createOrder", {
        form: this.form,
        payment
      })
      if ('payment_data' in data) {
        const url = data['payment_data']['formUrl']
        window.location.href = url
      } else {
        await this.$store.dispatch('popup/disableLoading')
        await this.$store.dispatch('notifications/createNotification', 'Заказ успешно создан!')
        await this.$router.push('/')
      }
    }
  },
  data: () => ({
    form: {
      date: null,
      name: '',
      phone: '',
      email: '',
      city: '',
      address: '',
      comment: ''
    },
    payment: {
      bank_card: false,
      cash_courier: false,
      cash_shop: false
    },
  }),
  async fetch() {
    await this.$store.dispatch("products/getProducts", {
      baseCategory: 'inventory',
      subCategory: this.$route.params.slug || null
    })
  }
}
</script>

<style scoped>

</style>
