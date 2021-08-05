<template>
<div class="checkbox-wrapper flex-start align-center" @click="toggle">
  <div
    :class="[
      'box',
      {'active': value}
    ]"
  >
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.993102 3.52835L4.29293 6.82819L3.35013 7.771L0.050293 4.47116L0.993102 3.52835Z" fill="white"/>
<path d="M3.35012 5.88537L9.00698 0.228516L9.94979 1.17132L4.29293 6.82819L3.35012 5.88537Z" fill="white"/>
</svg>
  </div>
  <div class="name"><slot></slot></div>
</div>
</template>

<script>
export default {
  name: "FilterCheckbox",
  props: ['value', 'group'],
  methods: {
    toggle() {
      if (this.group) {
        for(let radio in this.group) {
          this.group[radio] = false
        }
      }
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style scoped>

</style>
