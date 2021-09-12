<template>
  <CatalogPageTemplate category="inventory">
    <template v-slot:block1>
      <section class="block1 block1-type2 block1-type3">
        <client-only>
          <img v-if="$vssWidth > 1170" src="/img/inventory/1/bg.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/inventory/1/bg-m.png" alt="" class="bg">
          <img v-if="$vssWidth <= 1170" src="/img/inventory/1/1.png" alt="" class="bg2">
        </client-only>
        <div class="container">
          <h1>Прокат походного <br>инвентаря в Сочи</h1>
          <p>У нас вы можете арендовать профессиональное туристическое оборудование по доступным ценам, а опытные
            специалисты помогут с выбором и расскажут о самых красивых туристических маршрутах.</p>
          <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
        </div>
      </section>
    </template>
    <template v-slot:title>Подберите инветнарь для похода</template>
    <template v-slot:bottom-title>Прокат походного инвентаря в Сочи с командой "Точка-А"</template>
    <template v-slot:bottom-text>
      <p>В Сочи и его окрестностях есть много прекраснейших мест, которые не оставят вас равнодушными! Команда
        "Точка-А" предлагает широкий ассортимент туристического инвентаря, с которым ваше путешествие будет
        комфортным, живым и запоминающимся! В нашем прокатном центре вы сможете арендовать палатки, спальники,
        рюкзаки, газовые горелки, посуду, фонарики и многое другое. Наши специалисты подберут для вас лучший вариант
        снаряжения, а опытные гиды помогут составить маршрут и предоставят сопровождение по красивейшим туристическим
        местам Краснодарского края. При заказе от двух дней мы предоставляем скидку 10% , от трёх и более дней
        20%.</p>
    </template>
    <template v-slot:bottom>
      <ConsultationBlock type="Подбор инвентаря)">
        <template v-slot:title>Не знаете <span>как правильно подобрать инвентарь</span> и не ошибиться при выборе ?
        </template>
        <template v-slot:text>Оставьте заявку и наш менеджер подберёт <br>для вас лучшее решение
        </template>
        <template v-slot:formTitle>Оставьте заявку на <br>подбор инвентаря</template>
      </ConsultationBlock>
    </template>
  </CatalogPageTemplate>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import ConsultationBlock from "~/components/ConsultationBlock";
import CatalogPageTemplate from "@/components/CatalogPageTemplate";

export default {
  name: "index",
  components: {ConsultationBlock, CatalogPageTemplate},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
