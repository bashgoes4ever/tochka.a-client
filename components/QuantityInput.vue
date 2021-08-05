<template>
  <div class="quantity-wrapper noselect flex-between align-center">
    <div class="input" @click="decrease">
      <svg viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.66634 1.66634H0.333008V0.333008H9.66634V1.66634Z" fill="#2E3A59"/>
      </svg>
    </div>
    <div class="quantity-value">{{ value }}</div>
    <div class="input" @click="increase">
      <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.66634 5.66634H5.66634V9.66634H4.33301V5.66634H0.333008V4.33301H4.33301V0.333008H5.66634V4.33301H9.66634V5.66634Z"
          fill="#2E3A59"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuantityInput",
  props: ['value', 'max_value'],
  methods: {
    increase() {
      if (this.max_value === 0) {
        return
      }
      if (!this.max_value || this.value < this.max_value) {
        this.$emit('input', this.value + 1)
      } else {
        this.$store.dispatch('notifications/createNotification', 'Это максимально доступное количество товара для выбранного диапазона дат. Выберите другие даты или подберите другие товары в каталоге.')
      }
    },
    decrease() {
      if (this.value - 1 >= 1) {
        this.$emit('input', this.value - 1)
      }
    }
  }
}
</script>

<style scoped>

</style>
