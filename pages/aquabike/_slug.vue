<template>
  <CatalogPageTemplate category="aquabike">
    <template v-slot:block1>
      <section class="block1 block1-type2 block1-type3 block1-auto">
        <client-only>
          <img v-if="$vssWidth > 1170" src="/img/aquabike/bg.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/aquabike/bg-m.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/aquabike/1.png" alt="" class="bg2">
        </client-only>
        <div class="container">
          <h1>Прокат водных скутеров <br>(гидроциклов) в Сочи</h1>
          <p>У нас вы можете взять в аренду водные скутеры (гидроциклы) по разумным ценам.</p>
          <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
        </div>
      </section>
    </template>
    <template v-slot:title>Подберите транспорт</template>
    <template v-slot:bottom-title>Прокат водных скутеров (гидроциклов) в Сочи</template>
    <template v-slot:bottom-text>
      <p>Отдых в Сочи трудно представить без моря. Ветер, брызги волн, яркое солнце, прекрасные виды водных пейзажей.
        Наша команда предлагает прокат водных скутеров (гидроциклов), чтобы почувствовать чистую радость и драйв
        пребывания в морской стихии. Широкий ассортимент моделей и опытные специалисты, которые помогут определиться с
        выбором.</p>
    </template>
    <template v-slot:bottom>
      <ConsultationBlock
        type="Подбор инвентаря"
        background="/img/aquabike/bg2.png"
      >
        <template v-slot:title>Хотите <span>прокатиться на мощном гидроцикле,</span> но делаете это впервые?</template>
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
  name: "aquabike",
  components: {CatalogPageTemplate, ConsultationBlock},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
