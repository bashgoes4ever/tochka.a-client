<template>
  <div>
    <section class="block1 block1-type2 block1-type3">
      <client-only>
        <img v-if="$vssWidth > 1170" src="/img/diving/bg.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/diving/bg-m.png" alt="" class="bg">
      </client-only>
      <div class="container">
        <h1>Дайверские <br>погружения в Сочи</h1>
        <p>Lorem Ipsum - это текст-"рыба", часто используемый и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"
          текстов на латинице с начала XVI века.</p>
        <button @click="showPopup" class="btn">оставить заявку</button>
      </div>
    </section>
    <Block2/>
    <Block3/>
    <ConsultationBlock
      type="Дайвинг"
      background="/img/diving/bg2.png"
    >
      <template v-slot:title>Не знаете <span>как правильно подобрать</span> мото или вело транспорт ?</template>
      <template v-slot:text>Оставьте заявку и опытный менеджер <br>свяжется с вами и разъяснит все <br>нюансы и
        тонкости
      </template>
      <template v-slot:formTitle>Оставьте заявку на <br>подбор инвентаря</template>
    </ConsultationBlock>
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import Block2 from "@/components/Diving/Block2"
import Block3 from "@/components/Diving/Block3"
import ConsultationBlock from "~/components/ConsultationBlock";

export default {
  name: "diving",
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  components: {Block2, Block3, ConsultationBlock},
  methods: {
    showPopup() {
      this.$store.dispatch("popup/showPopup")
      this.$store.dispatch("popup/setType", "Заявка на дайвинг")
    }
  },
}
</script>

<style scoped>

</style>
