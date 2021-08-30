<template>
  <section class="block3">
    <img src="/img/home/block3/bg.png" alt="" class="bg">
    <div class="container">
      <img src="/img/home/block3/rope.png" alt="" class="rope">
      <h2 class="section__title">Подготовьтесь к своему походу <br>вместе с <span>командой Точка А</span></h2>
      <div class="block3__flex flex-between">
        <NuxtLink class="item" to="/inventory/palatki">
          <div class="title">
            Палатки
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.333008 5.83333L10.4747 5.83333L7.49134 8.825L8.66634 10L13.6663 5L8.66634 0L7.49134 1.175L10.4747 4.16667L0.333008 4.16666L0.333008 5.83333Z"
                fill="#02979D"/>
            </svg>
          </div>
          <div class="link">
            <span>перейти в раздел</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.66626 4.66667L8.77959 4.66667L6.39293 7.06L7.33293 8L11.3329 4L7.33293 0L6.39293 0.94L8.77959 3.33333L0.66626 3.33333L0.66626 4.66667Z"
                fill="#02979D"/>
            </svg>
          </div>
          <client-only>
            <img v-if="$vssWidth > 1170" src="/img/home/block3/1.png" alt="">
            <img v-if="$vssWidth <= 1170" src="/img/home/block3/1-m.png" alt="">
          </client-only>
        </NuxtLink>
        <NuxtLink class="item" to="/inventory/ryukzaki">
          <div class="title">
            Рюкзаки
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.333008 5.83333L10.4747 5.83333L7.49134 8.825L8.66634 10L13.6663 5L8.66634 0L7.49134 1.175L10.4747 4.16667L0.333008 4.16666L0.333008 5.83333Z"
                fill="#02979D"/>
            </svg>
          </div>
          <div class="link">
            <span>перейти в раздел</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.66626 4.66667L8.77959 4.66667L6.39293 7.06L7.33293 8L11.3329 4L7.33293 0L6.39293 0.94L8.77959 3.33333L0.66626 3.33333L0.66626 4.66667Z"
                fill="#02979D"/>
            </svg>
          </div>
          <client-only>
            <img v-if="$vssWidth > 1170" src="/img/home/block3/2.png" alt="">
            <img v-if="$vssWidth <= 1170" src="/img/home/block3/2-m.png" alt="">
          </client-only>
        </NuxtLink>
        <NuxtLink class="item" to="/inventory/spalniki">
          <div class="title">
            Спальники
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.333008 5.83333L10.4747 5.83333L7.49134 8.825L8.66634 10L13.6663 5L8.66634 0L7.49134 1.175L10.4747 4.16667L0.333008 4.16666L0.333008 5.83333Z"
                fill="#02979D"/>
            </svg>
          </div>
          <div class="link">
            <span>перейти в раздел</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.66626 4.66667L8.77959 4.66667L6.39293 7.06L7.33293 8L11.3329 4L7.33293 0L6.39293 0.94L8.77959 3.33333L0.66626 3.33333L0.66626 4.66667Z"
                fill="#02979D"/>
            </svg>
          </div>
          <img src="/img/home/block3/3.png" alt="">
        </NuxtLink>
        <NuxtLink class="item" to="/inventory/vse-dlya-kempinga">
          <div class="title">
            Кемпинг
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.333008 5.83333L10.4747 5.83333L7.49134 8.825L8.66634 10L13.6663 5L8.66634 0L7.49134 1.175L10.4747 4.16667L0.333008 4.16666L0.333008 5.83333Z"
                fill="#02979D"/>
            </svg>
          </div>
          <div class="link">
            <span>перейти в раздел</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.66626 4.66667L8.77959 4.66667L6.39293 7.06L7.33293 8L11.3329 4L7.33293 0L6.39293 0.94L8.77959 3.33333L0.66626 3.33333L0.66626 4.66667Z"
                fill="#02979D"/>
            </svg>
          </div>
          <img src="/img/home/block3/4.png" alt="">
        </NuxtLink>
        <NuxtLink class="item" to="/inventory/oborudovanie">
          <div class="title">
            Оборудование
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.333008 5.83333L10.4747 5.83333L7.49134 8.825L8.66634 10L13.6663 5L8.66634 0L7.49134 1.175L10.4747 4.16667L0.333008 4.16666L0.333008 5.83333Z"
                fill="#02979D"/>
            </svg>
          </div>
          <div class="link">
            <span>перейти в раздел</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.66626 4.66667L8.77959 4.66667L6.39293 7.06L7.33293 8L11.3329 4L7.33293 0L6.39293 0.94L8.77959 3.33333L0.66626 3.33333L0.66626 4.66667Z"
                fill="#02979D"/>
            </svg>
          </div>
          <img src="/img/home/block3/5.png" alt="">
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

export default {
  name: "Block3",
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
