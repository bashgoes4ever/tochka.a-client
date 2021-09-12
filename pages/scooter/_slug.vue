<template>
  <CatalogPageTemplate category="scooter">
    <template v-slot:block1>
      <section class="block1 block1-type2 block1-type3">
        <client-only>
          <img v-if="$vssWidth > 1170" src="/img/scooter/bg.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/scooter/bg-m.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/scooter/1.png" alt="" class="bg2">
        </client-only>
        <div class="container">
          <h1>Прокат самокатов <br>в Сочи</h1>
          <p>У нас вы можете взять напрокат самокаты. Широкий выбор моделей. Специалисты центра помогут определиться с
            выбором.</p>
          <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
        </div>
      </section>
    </template>
    <template v-slot:title>Подберите транспорт</template>
    <template v-slot:bottom-title>Арендовать самокат в Сочи</template>
    <template v-slot:bottom-text>
      <p>В Сочи - развитая транспортная инфраструктура и хорошие тротуары. У нас вы можете взять напрокат самокаты
        топовых брендов для комфортного передвижения по городу. Команда "Точка-А" предлагает разумные цены и помощь при
        выборе.</p>
    </template>
    <template v-slot:bottom>
      <ConsultationBlock
        type="Подбор инвентаря"
        background="/img/scooter/bg2.png"
      >
        <template v-slot:title><span>Затрудняетесь с выбором</span> самоката?</template>
        <template v-slot:text>Оставьте заявку и наш менеджер подберёт лучшую модель.
        </template>
        <template v-slot:formTitle>Оставьте заявку на <br>подбор транспорта</template>
      </ConsultationBlock>
    </template>
  </CatalogPageTemplate>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import CatalogPageTemplate from "@/components/CatalogPageTemplate";
import ConsultationBlock from "~/components/ConsultationBlock";

export default {
  name: "scooter",
  components: {CatalogPageTemplate, ConsultationBlock},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
