<template>
  <div>
    <section class="block1">
      <client-only>
        <img v-if="$vssWidth > 1170" src="/img/home/block1/bg.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/home/block1/bg-m.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/home/block1/1.png" alt="" class="bg1">
      </client-only>
      <div class="container">
        <h1>Начало твоего <br>отдыха в <span>Сочи</span></h1>
        <ul>
          <li>Туристическое снаряжение</li>
          <li>Авторские туры</li>
          <li>Аренда морского транспорта</li>
          <li>Прокат авто и мото</li>
        </ul>
        <NuxtLink to="/inventory" tag="button" class="btn">перейти в каталог</NuxtLink>
      </div>
    </section>
    <Block2/>
    <Block3/>
    <Block6/>
    <Block4/>
    <section class="block5">
      <client-only>
        <img v-if="$vssWidth > 1170" src="/img/home/block5/bg.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/home/block5/bg-m.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/home/block5/1.png" alt="" class="bg2">
      </client-only>
      <div class="container">
        <div class="text-wrapper">
          <h2 class="section__title">Здравствуйте, меня <br>зовут Александр</h2>
          <p>Я занимаюсь организацией походов и прокатом туристического снаряжения. Несмотря на то, что Сочи заметно преобразился после проведённой Олимпиады - сервис огромного количества отраслей так и остался на прежнем уровне. Чтобы подобрать снаряжение людям приходилось тратить много времени, перебирая кучу сайтов.</p>
          <p>Наша команда решила эту задачу! Всё необходимое оборудование для туризма собрано в одном месте. Помимо этого у нас действует прокат яхт, кабриолетов и другого транспорта, проводятся экскурсии в красивейшие места с опытными гидами, а также морские погружения.</p>
          <p>"Точка-А" - команда профессионалов! Мы лично проверили все заявленные услуги и гарантируем отличное качество. С нами ваш отдых будет комфортным, безопасным и запоминающимся!</p>
        </div>
      </div>
    </section>
    <Block7/>
    <ConsultationBlock has-icon="true" type="Подбор инвентаря (главная)">
      <template v-slot:title>Не знаете <span>как правильно подобрать инвентарь</span> и не ошибиться при выборе ?
      </template>
      <template v-slot:text>Оставьте заявку и опытный гид свяжется <br>с вами и разъяснит все нюансы и тонкости
      </template>
      <template v-slot:formTitle>Оставьте заявку на <br>подбор инвентаря</template>
    </ConsultationBlock>
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import Block2 from "~/components/Home/Block2";
import Block3 from "~/components/Home/Block3";
import Block4 from "~/components/Home/Block4";
import Block6 from "~/components/Home/Block6";
import Block7 from "~/components/Home/Block7";
import ConsultationBlock from "~/components/ConsultationBlock";

export default {
  layout: 'default',
  components: {Block2, Block3, Block4, Block6, Block7, ConsultationBlock},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  async mounted() {
    if (this.$route.query.orderId) {
        await this.$store.dispatch('notifications/createNotification', 'Заказ успешно создан!')
    }
  }
}
</script>
