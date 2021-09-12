<template>
  <div>
    <slot name="block1"></slot>
    <ShopBlock id="shop">
      <template v-slot:title>
        <slot name="title"></slot>
      </template>

      <template v-if="$store.getters['products/categories'].length > 0" v-slot:tabs>
        <NuxtLink
          tag="div"
          class="tab"
          active-class="active"
          v-for="cat in $store.getters['products/categories']"
          :key="cat.id"
          :to="`/${category}/${cat.slug}#shop`"
        >
          <span>{{ cat.name }}</span>
        </NuxtLink>
      </template>

      <template v-if="$store.getters['products/filters'].length > 0" v-slot:filters>
        <FilterCheckbox
          :value="filter.value"
          @input="updateFilter(filter)"
          :key="filter.id"
          v-for="filter in $store.getters['products/filters']"
        >{{ filter.name }}
        </FilterCheckbox>
      </template>

      <template v-if="$store.getters['products/products'].length > 0" v-slot:products>
        <ProductCard
          v-for="product in $store.getters['products/products']"
          :key="product.id"
          :data="product"
        ></ProductCard>
      </template>

      <template v-if="$store.getters['products/totalPages'] > 1" v-slot:pagination>
        <Pagination
          :base-category="category"
          :sub-category="$route.params.slug || null"
        />
      </template>

      <template v-slot:bottom-title>
        <slot name="bottom-title"></slot>
      </template>
      <template v-slot:bottom-text>
        <slot name="bottom-text"></slot>
      </template>
    </ShopBlock>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import ConsultationBlock from "~/components/ConsultationBlock";
import ShopBlock from "@/components/Shop/ShopBlock";
import FilterCheckbox from "@/components/Shop/FilterCheckbox";
import ProductCard from "@/components/Shop/ProductCard";
import Pagination from "@/components/Shop/Pagination";

export default {
  name: "CatalogPageTemplate",
  props: ['category'],
  components: {ShopBlock, FilterCheckbox, ProductCard, ConsultationBlock, Pagination},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  async fetch() {
    const filters = Array.isArray(this.$route.query.filters) ? this.$route.query.filters : this.$route.query.filters && [this.$route.query.filters]
    const page = this.$route.query.page

    await this.$store.dispatch("products/getCategories", this.category)
    await this.$store.dispatch("products/getFilters", {
      baseCategory: this.category,
      subCategory: this.$route.params.slug || null,
    })

    if (filters?.length > 0) {
      for (const filter of filters) {
        await this.$store.dispatch('products/setFilterCheckbox', filter)
      }
    }

    await this.$store.dispatch("products/getProducts", {
      baseCategory: this.category,
      subCategory: this.$route.params.slug || null,
      filters: filters?.map(f => ({id: f})),
      page
    })
  },
  methods: {
    addParamsToLocation(params) {
      const query = []
      for (const param of params) {
        const key = Object.keys(param)[0]
        query.push(`${key}=${param[key]}`)
      }
      history.pushState(
        {},
        null,
        this.$route.path +
        '?' + query.join('&')
      )
    },
    updateFilter(filter) {
      this.$store.dispatch("products/setFilterCheckbox", filter.id)
      this.$store.dispatch("products/getProducts", {
        baseCategory: this.category,
        subCategory: this.$route.params.slug || null,
        filters: this.$store.getters['products/filters'].filter(f => f.value === true)
      })

      this.updateQuery()
    },
    updateQuery() {
      const query = []
      if (this.$store.getters["products/filters"] && this.$store.getters['products/filters'].filter(f => f.value === true).length > 0) {
        for (let filter of this.$store.getters['products/filters'].filter(f => f.value === true)) {
          query.push({filters: filter.id})
        }
      }
      query.push({page: this.$store.getters["products/currentPage"]})
      this.addParamsToLocation(query)
    }
  }
}
</script>

<style scoped>

</style>
