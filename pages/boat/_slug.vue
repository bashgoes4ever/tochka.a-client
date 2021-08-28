<template>
  <CatalogPageTemplate category="boat">
    <template v-slot:block1>
      <section class="block1 block1-type2 block1-type3">
        <client-only>
          <img v-if="$vssWidth > 1170" src="/img/boat/bg.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/boat/bg-m.png" alt="" class="bg">
        </client-only>
        <div class="container">
          <h1>Прокат морского <br>транспорта в Сочи</h1>
          <p>В нашем прокате можно арендовать парусные и моторные яхты от мировых лидеров судостроения. </p>
          <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
        </div>
      </section>
    </template>
    <template v-slot:title>Подберите транспорт</template>
    <template v-slot:bottom-title>Прокат яхт в Сочи</template>
    <template v-slot:bottom-text>
      <p>Арендовать яхту для отдыха или организации деловой встречи на море вы можете с нашей командой. Мы предоставляем
        широкий выбор моделей от ведущих производителей Европы и США. Специалисты центра подробно расскажут о всех
        суднах, а опытный капитан сопроводит к живописнейшим видам Черноморского побережья.</p>
    </template>
    <template v-slot:bottom>
      <ConsultationBlock
        type="Подбор инвентаря"
        background="/img/boat/bg2.png"
      >
        <template v-slot:title>Хотите <span>арендовать яхту,</span> но затрудняетесь с выбором?</template>
        <template v-slot:text>Оставьте заявку и наш менеджер поможет подобрать лучший вариант.
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
  name: "boat",
  components: {CatalogPageTemplate, ConsultationBlock},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
