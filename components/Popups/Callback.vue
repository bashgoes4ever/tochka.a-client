<template>
  <form class="popup-form">
    <div class="title">Оставьте заявку</div>
    <p>И мы проконсультируем вас <br>по необходимым вопросам</p>
    <input type="text" placeholder="Введите ваше имя" v-model="name">
    <input type="text" placeholder="Введите ваш телефон" v-model="phone">
    <textarea placeholder="Комментарий к заявке" v-model="comment"></textarea>
    <button class="btn" @click.prevent="apply">Заказать звонок</button>
  </form>
</template>

<script>
export default {
  name: "Callback",
  data: () => ({
    name: '',
    phone: '',
    comment: '',
  }),
  methods: {
    async apply() {
      await this.$store.dispatch('popup/apply', {
        name: this.name,
        phone: this.phone,
        description: this.comment,
        form: this.$store.getters["popup/type"]
      })
    }
  }
}
</script>

<style scoped>

</style>
