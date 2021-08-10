<template>
<div class="flex-center align-center pagination-flex" v-if="$store.getters['products/totalPages'] > 1">
  <div
    @click="loadNewPage($store.getters['products/currentPage'] - 1)"
    :class="[
      'prev',
      'pgn-btn',
      {'disabled': $store.getters['products/currentPage'] === 1}
    ]"
  >Назад</div>

  <div
    v-for="page in pages"
    @click="loadNewPage(page)"
    :key="page"
    :class="[
      'number',
      'pgn-btn',
      {'active': page === $store.getters['products/currentPage']}
    ]"
  >{{ page }}</div>

  <div
    @click="loadNewPage($store.getters['products/currentPage'] + 1)"
    :class="[
      'next',
      'pgn-btn',
      {'disabled': $store.getters['products/currentPage'] === $store.getters['products/totalPages']}
    ]"
  >Вперед</div>
</div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'
export default {
  name: "Pagination",
  props: ['baseCategory', 'subCategory'],
  computed: {
    pages() {
      const left = []
      const right = []

      if (this.$store.getters['products/totalPages'] <= 4) {
        for(let i = 0; i < this.$store.getters['products/totalPages']; i++) {
          left.push(i + 1)
        }
        return left
      }

      if (this.$store.getters['products/totalPages'] - this.$store.getters['products/currentPage'] > 3) {
        left.push(this.$store.getters['products/currentPage'], this.$store.getters['products/currentPage']+1, this.$store.getters['products/currentPage']+2, '...')
        right.push(this.$store.getters['products/totalPages'])
      } else {
        left.push(1, '...')
        right.push(this.$store.getters['products/totalPages'] - 2, this.$store.getters['products/totalPages'] - 1, this.$store.getters['products/totalPages'])
      }

      return left.concat(right)
    }
  },
  methods: {
    async loadNewPage(page) {
      if (page !== this.$store.getters['products/currentPage']) {
        await this.$store.dispatch("products/getProducts", {
          baseCategory: this.baseCategory,
          subCategory: this.subCategory,
          page
        })
        VueScrollTo.scrollTo('#shop-content')
      }
    }
  }
}
</script>

<style scoped>

</style>
