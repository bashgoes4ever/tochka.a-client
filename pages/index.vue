<template>
  <div>
    <section class="block1">
      <client-only>
        <img v-if="$vssWidth > 1170" src="/img/home/block1/bg.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/home/block1/bg-m.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/home/block1/1.png" alt="" class="bg1">
      </client-only>
      <div class="container">
        <h1><span>Прокат</span> походного <br>снаряжения и <br>транспорта в Сочи</h1>
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
          <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
            "рыбой" для текстов на латинице с начала XVI века.</p>
          <p>В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов</p>
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
}
</script>
