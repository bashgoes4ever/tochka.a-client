<template>
  <CatalogPageTemplate category="bicycle">
    <template v-slot:block1>
      <section class="block1 block1-type2 block1-type3 block1-bicycle">
        <client-only>
          <img v-if="$vssWidth > 1170" src="/img/bicycle/bg.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/bicycle/bg-m.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/bicycle/1.png" alt="" class="bg2">
        </client-only>
        <div class="container">
          <h1>Прокат горных <br>и спортивных <br>велосипедов в Сочи</h1>
          <p>У нас вы можете взять напрокат более 20 моделей велосипедов в отличном техническом состоянии. Есть модели
            для детей и взрослых.</p>
          <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
        </div>
      </section>
    </template>
    <template v-slot:title>Подберите транспорт</template>
    <template v-slot:bottom-title>Прокат велосипедов в Сочи</template>
    <template v-slot:bottom-text>
      <p>Если вы любите активный отдых и яркие впечатления, поездка на велосипеде по Сочи и его окрестностям - отличный
        выбор. Команда "Точка-А" предлагает широкую линейку моделей от ведущих велобрендов. Наши специалисты помогут вам
        определиться с выбором, чтобы велопрогулка была комфортной и запоминающейся.</p>
    </template>
    <template v-slot:bottom>
      <ConsultationBlock
        type="Подбор инвентаря"
        background="/img/bicycle/bg2.png"
      >
        <template v-slot:title><span>Затрудняетесь с выбором</span> велосипеда?</template>
        <template v-slot:text>Оставьте заявку и наш менеджер подберёт лучшую модель .
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
  name: "bicycle",
  components: {CatalogPageTemplate, ConsultationBlock},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
