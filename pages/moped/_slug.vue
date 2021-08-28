<template>
  <CatalogPageTemplate category="moped">
    <template v-slot:block1>
      <section class="block1 block1-type2 block1-type3">
        <client-only>
          <img v-if="$vssWidth > 1170" src="/img/moped/bg.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/moped/bg-m.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/moped/1.png" alt="" class="bg2">
        </client-only>
        <div class="container">
          <h1>Прокат мопедов и <br>скутеров в Сочи</h1>
          <p>В нашем прокатном центре вы можете арендовать мопеды и скутеры с полным набором экипировки и круглосуточной
            техподдержкой.</p>
          <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
        </div>
      </section>
    </template>
    <template v-slot:title>Подберите транспорт</template>
    <template v-slot:bottom-title>Прокат мопедов и скутеров в Сочи</template>
    <template v-slot:bottom-text>
      <p>В нашем прокатном центре представлен широкий выбор моделей скутеров и мопедов по разумным ценам, в которые
        включён полный набор экипировки: шлемы, мотокуртки, перчатки, противоугонный трос, держатель для смартфона,
        карта. Наша техническая поддержка работает круглосуточно и без выходных.</p>
    </template>
    <template v-slot:bottom>
      <ConsultationBlock
        type="Подбор инвентаря"
        background="/img/moped/bg2.png"
      >
        <template v-slot:title><span>Затрудняетесь с выбором</span> мопеда?</template>
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
  name: "moped",
  components: {CatalogPageTemplate, ConsultationBlock},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
