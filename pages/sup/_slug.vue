<template>
  <CatalogPageTemplate category="sup">
    <template v-slot:block1>
      <section class="block1 block1-type2 block1-type3">
        <client-only>
          <img v-if="$vssWidth > 1170" src="/img/sup/bg.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/sup/bg-m.png" alt="" class="bg">
        </client-only>
        <div class="container">
          <h1>Прокат сапбордов <br>в Сочи</h1>
          <p>У нас вы можете взять в прокат сапборды по доступным ценам, а опытные специалисты помогут с выбором.</p>
          <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
        </div>
      </section>
    </template>
    <template v-slot:title>Подберите сапборд</template>
    <template v-slot:bottom-title>Катание на сапборде в Сочи</template>
    <template v-slot:bottom-text>
      <p>Сапбординг или сёрфинг с веслом - молодой спорт, быстро набравший популярность. Считается, что произошёл от
        каноэ. Опробовать новшество, взяв сапборд напрокат вы можете в нашем центре. Специалисты компании помогут вам
        определиться с выбором.</p>
    </template>
    <template v-slot:bottom>
      <ConsultationBlock
        type="Подбор сапа"
        background="/img/sup/bg2.png"
      >
        <template v-slot:title><span>Затрудняетесь с <br>выбором</span> сапборда?</template>
        <template v-slot:text>Оставьте заявку и наш менеджер подберёт лучший вариант
        </template>
        <template v-slot:formTitle>Оставьте заявку на <br>подбор сапборда</template>
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
