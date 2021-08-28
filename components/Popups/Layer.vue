<template>
  <div class="layer">
    <Callback v-click-outside="hide" v-if="$store.getters['popup/popup']" />
    <Thank v-click-outside="hide" v-if="$store.getters['popup/thank']" />
    <div @click="$store.dispatch('popup/hide')" class="close">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#20292D"/>
</svg>
    </div>
  </div>
</template>

<script>
import Callback from "@/components/Popups/Callback";
import Thank from "@/components/Popups/Thank";
import ClickOutside from "vue-click-outside";

export default {
  name: "Layer",
  components: {Callback, Thank},
  directives: {
    ClickOutside
  },
  methods: {
    hide() {
      if (this.$store.getters["popup/showLayer"]) {
        this.$store.dispatch('popup/hide')
      }
    }
  },
}
</script>

<style scoped>

</style>
