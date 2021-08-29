<template>
  <div v-if="data">
    <section class="block1 tour-detail-block1">
      <img v-if="data.detail_thumb" :src="`${$store.getters['env/domain']}${data.detail_thumb}`" alt="" class="bg">
      <client-only>
        <img v-if="$vssWidth > 1170 && !data.detail_thumb" src="/img/tour/1/bg.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170 && !data.detail_thumb" src="/img/tour/1/bg-m.png" alt="" class="bg">
      </client-only>
      <div class="container">
        <h1 v-html="data.detail_name"></h1>
        <button class="btn" @click="showPopup">оставить заявку</button>
        <div class="tour-info flex-between align-center">
          <div class="item">
            <div class="title">Группа <span>от {{ data.groups_from }} <br><span
              v-if="data.groups_to">до {{ data.groups_to }}</span></span> человек
            </div>
            <img src="/img/tour/1/1.png" alt="">
          </div>
          <div class="item">
            <div class="title">Время в туре <br><span>{{ data.duration }}</span></div>
            <img src="/img/tour/1/2.png" alt="">
          </div>
          <div class="item">
            <div class="title">Стоимость <br>от <span>{{ data.price }} руб</span></div>
            <img src="/img/tour/1/3.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <Block2 :data="data.steps"/>
    <Block3 :data="data"/>
    <Block4 :data="data"/>
    <section class="tour-block5">
      <div class="container">
        <h2 class="section__title">Посмотрите видео отчёт с нашего <br>последнего похода</h2>
        <div class="video" v-html="data.video_url"></div>
      </div>
    </section>
    <Block6 :data="data"/>
    <Block7 :data="data.guides"/>
    <Block8 :data="data.faq_items"/>
    <ConsultationBlock type="Консультация по туру">
      <template v-slot:title>У вас остались вопросы ?</template>
      <template v-slot:text>Оставьте свои данные и мы свяжемся с <br>Вами, чтобы обсудить детали поездки и <br>предоставить
        дополнительную информацию
      </template>
      <template v-slot:formTitle>Оставьте свои данные и получите подробную консультацию</template>
    </ConsultationBlock>
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import Block2 from "@/components/Tour/Block2";
import Block3 from "@/components/Tour/Block3";
import Block4 from "@/components/Tour/Block4";
import Block6 from "@/components/Tour/Block6";
import Block7 from "@/components/Tour/Block7";
import Block8 from "@/components/Tour/Block8";
import ConsultationBlock from "@/components/ConsultationBlock";

export default {
  name: "TourDetail",
  layout: 'default',
  components: {Block2, Block3, Block4, Block6, Block7, ConsultationBlock, Block8},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data: () => ({
    data: null
  }),
  methods: {
    showPopup() {
      this.$store.dispatch("popup/showPopup")
      this.$store.dispatch("popup/setType", this.data.short_name)
    }
  },
  async fetch() {
    const {data} = await this.$axios({
      url: `api/v1/tour/${this.$route.params.slug}`,
      method: 'get'
    })
    this.data = data
  }
}
</script>

<style scoped>

</style>
