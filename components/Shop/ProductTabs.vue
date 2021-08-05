<template>
  <div>
    <div class="product-tabs flex-between">
      <div
        v-if="product.characteristics.length > 0"
        @click="currentTab = 1"
        :class="[
          'product-tab',
          {'active': currentTab === 1}
        ]"
      ><span>характеристики</span></div>
      <div
        @click="currentTab = 2"
        v-if="product.description"
        :class="[
          'product-tab',
          {'active': currentTab === 2}
        ]"
      ><span>описание</span></div>
    </div>
    <div class="product-description">
      <div class="table" v-if="currentTab === 1">
        <div class="row flex-start align-end" v-for="char in product.characteristics" :key="char.id">
          <div class="col1">{{ char.characteristic.name }}:</div>
          <div class="col2"></div>
          <div class="col3">{{ char.value }}</div>
        </div>
      </div>
      <p v-if="currentTab === 2" v-html="product.description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductTabs",
  props: ['product'],
  data: () => ({
    currentTab: 1
  }),
  created() {
    if (!this.product.characteristics.length === 0) this.currentTab = 2
  }
}
</script>

<style scoped>

</style>
