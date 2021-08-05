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
          <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
            "рыбой" для текстов на латинице с начала XVI века.</p>
          <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
        </div>
      </section>
    </template>
    <template v-slot:title>Подберите транспорт</template>
    <template v-slot:bottom-title>Прокат походного инвентаря в Сочи</template>
    <template v-slot:bottom-text>
      <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
        "рыбой" для текстов на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба", часто используемый в печати
        и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время
        некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
        распечатки образцов</p>
      <p>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum
        для распечатки образцов</p>
    </template>
    <template v-slot:bottom>
      <ConsultationBlock
        type="Подбор инвентаря"
        background="/img/scooter/bg2.png"
      >
        <template v-slot:title>Не знаете <span>как правильно подобрать</span> мото или вело транспорт ?</template>
        <template v-slot:text>Оставьте заявку и опытный менеджер <br>свяжется с вами и разъяснит все <br>нюансы и
          тонкости
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
