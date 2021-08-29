<template>
  <CatalogPageTemplate category="auto">
    <template v-slot:block1>
      <section class="block1 block1-type2 block1-type3 block1-auto">
        <client-only>
          <img v-if="$vssWidth > 1170" src="/img/auto/bg.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/auto/bg-m.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/auto/1.png" alt="" class="bg2">
        </client-only>
        <div class="container">
          <h1>Прокат кабриолетов <br>премиум-класса в Сочи</h1>
          <p>В нашем автопарке вы можете взять в прокат кабриолеты для путешствий по живописнейшим местам Сочи, стильных фотосессий или деловой поездки. Мы работаем без перерывов и выходных.</p>
          <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
        </div>
      </section>
    </template>
    <template v-slot:title>Подберите транспорт</template>
    <template v-slot:bottom-title>Прокат кабриолетов в Сочи</template>
    <template v-slot:bottom-text>
      <p>У нас вы можете арендовать кабриолет для комфортного передвижения по большому Сочи, путешествий в красивейшие
        места Абхазии и горы Красной Поляны, а также деловых командировок. Наследие Олимпиады подарило нам качественные
        дороги и развитую транспортную инфраструктуру, поэтому передвигаться по городу и окрестностям стало комфортно и
        безопасно.</p>
    </template>
    <template v-slot:bottom>
      <ConsultationBlock
        type="Подбор инвентаря"
        background="/img/auto/bg2.png"
      >
        <template v-slot:title><span>Не можете определиться</span> с выбором модели автомобиля?</template>
        <template v-slot:text>Оставьте заявку и наш менеджер подберёт <br>для вас лучший вариант авто.
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
  name: "auto",
  components: {CatalogPageTemplate, ConsultationBlock},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
