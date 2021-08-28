<template>
  <section class="consultation">
    <client-only>
      <img v-if="this.$vssWidth > 1170 && !this.background" src="/img/home/block8/bg.png" alt="" class="bg">
      <img v-if="this.$vssWidth > 1170 && this.background" :src="this.background" alt="" class="bg">
      <img v-if="this.$vssWidth <= 1170" src="/img/home/block8/bg-m.png" alt="" class="bg">
    </client-only>
    <div class="container">
      <div class="flex-between align-start">
        <div class="text-wrapper">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <p>
            <slot name="text"></slot>
          </p>
        </div>
        <form>
          <div class="title">
            <slot name="formTitle"></slot>
          </div>
          <input type="text" placeholder="Введите ваше имя" v-model="name">
          <input type="text" placeholder="Введите ваш телефон" v-model="phone">
          <textarea placeholder="Комментарий к заявке" v-model="comment"></textarea>
          <button class="btn" @click.prevent="apply">
            Подобрать инветарь
            <img v-if="hasIcon" src="/img/home/block8/1.png" alt="">
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

export default {
  name: "ConsultationBlock",
  data: () => ({
    name: '',
    phone: '',
    comment: ''
  }),
  methods: {
    async apply() {
      await this.$store.dispatch('popup/apply', {
        name: this.name,
        phone: this.phone,
        description: this.comment,
        form: this.type
      })
    }
  },
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  props: ['type', 'hasIcon', 'background']
}
</script>

<style scoped>

</style>
