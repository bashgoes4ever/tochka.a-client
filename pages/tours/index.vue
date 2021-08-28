<template>
  <div>
    <section class="block1 tours-page-block1">
      <client-only>
        <img v-if="$vssWidth > 1170" src="/img/tour/bg.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/tour/bg-m.png" alt="" class="bg">
      </client-only>
      <div class="container">
        <h1>Организуем авторские <br>туры в <span>горы красной <br>поляны и абхазии</span></h1>
        <button v-scroll-to="'#tours'" class="btn">Подобрать тур</button>
      </div>
    </section>
    <section class="tours-page" id="tours">
      <div class="container">
        <div class="grid">
          <BlogCard
            v-for="tour in tours"
            :key="tour.id"
            :data="tour"
            :tour="true"
          />
        </div>
      </div>
    </section>
    <ConsultationBlock has-icon="true" type="Подбор инвентаря (страница туров)">
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
import BlogCard from "@/components/BlogCard";
import ConsultationBlock from "~/components/ConsultationBlock";
export default {
  name: "index",
  components: {BlogCard, ConsultationBlock},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  data: () => ({
    tours: []
  }),
  async fetch() {
    const {data} = await this.$axios({
      url: 'api/v1/tours',
      method: 'get'
    })

    this.tours = data.map(t => {
      return {
        thumb: t.card_thumb,
        name: t.short_name,
        description: t.short_description,
        slug: t.slug
      }
    })
  }
}
</script>

<style scoped>

</style>
