<template>
  <header :class="isActive && 'active'">
    <div class="container">
      <div class="header-flex flex-between align-center">
        <div class="col flex-between align-center">
          <div @click="isActive = !isActive" v-click-outside="hide" class="menu-item dropdown-header">
            <span class="link-name">
              прокат
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
  <path
    d="M0.993164 1.46796L5.0001 5.47489L9.00704 1.46796L8.06423 0.525147L5.0001 3.58928L1.93597 0.525146L0.993164 1.46796Z"
    fill="#20292D"/>
  </svg>
            </span>
            <div v-if="isActive" class="dropdown-menu container">
              <div class="flex-between align-start">
                <div class="dropdown-section">
                  <div class="title">Туристическое <br>оборудование</div>
                  <ul>
                    <li>
                      <NuxtLink to="/inventory/palatki">Палатки</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/inventory/spalniki">Спальники</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/inventory/ryukzaki">Рюкзаки</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/inventory/oborudovanie">Оборудование</NuxtLink>
                    </li>
                  </ul>
                  <img src="/img/menu/1.png" alt="" class="bg">
                </div>
                <div class="dropdown-section">
                  <div class="title">Авто <br>и велотранспорт</div>
                  <ul>
                    <li>
                      <NuxtLink to="/auto">Автомобили</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/bicycle">Велосипеды</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/moped">Мопеды</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/scooter">Самокаты</NuxtLink>
                    </li>
                  </ul>
                  <img src="/img/menu/2.png" alt="" class="bg">
                </div>
                <div class="dropdown-section">
                  <div class="title">Морской <br>транспорт</div>
                  <ul>
                    <li>
                      <NuxtLink to="/boat">Яхты</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/aquabike">Водные скутеры</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/diving">Дайвинг</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/sup">Сапы</NuxtLink>
                    </li>
                  </ul>
                  <img src="/img/menu/3.png" alt="" class="bg">
                </div>
              </div>
            </div>
          </div>
          <div class="menu-item">
            <NuxtLink class="link-name" to="/tours">туры</NuxtLink>
          </div>
          <div class="menu-item">
            <NuxtLink class="link-name" to="/gallery">Фотогалерея</NuxtLink>
          </div>
          <div class="menu-item">
            <NuxtLink class="link-name" to="/reviews">Отзывы</NuxtLink>
          </div>
          <div class="menu-item">
            <NuxtLink class="link-name" to="/">Расписание</NuxtLink>
          </div>
        </div>
        <NuxtLink class="logo" to="/">
          <img src="/img/logo.png" alt="">
        </NuxtLink>
        <div class="col flex-between align-center">
          <div class="flex-start align-center">
            <div class="menu-item">
              <NuxtLink class="link-name" to="/blog">Блог</NuxtLink>
            </div>
            <div class="menu-item">
              <NuxtLink class="link-name" to="/contacts">Контакты</NuxtLink>
            </div>
          </div>
          <div class="menu-right flex-start align-center">
            <div class="phone">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.99364 3.24844C2.20452 2.89927 3.36641 1.62926 4.19556 1.6676C4.44341 1.68814 4.66251 1.83807 4.84052 2.01197C5.24928 2.41112 6.41939 3.92076 6.4858 4.23843C6.64739 5.01756 5.71897 5.46668 6.00311 6.25197C6.7275 8.02451 7.97566 9.27261 9.74898 9.99628C10.5336 10.2804 10.9828 9.35203 11.7619 9.51429C12.0789 9.5807 13.5893 10.7508 13.9885 11.1595C14.1617 11.3368 14.3124 11.5566 14.3329 11.8044C14.3637 12.6773 13.0149 13.8556 12.752 14.0062C12.1317 14.4499 11.3224 14.4423 10.3357 13.9836C7.58266 12.8382 3.18292 8.52156 2.01623 5.66454C1.56982 4.68345 1.53901 3.86872 1.99364 3.24844Z" stroke="#02979D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              <span>8 938 4451 613</span>
            </div>
            <BasketIcon />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import BasketIcon from "~/components/Header/BasketIcon";
export default {
  name: "HeaderDesktop",
  directives: {
    ClickOutside
  },
  components: {BasketIcon},
  data: () => ({
    isActive: false
  }),
  methods: {
    hide() {
      this.isActive = false
    }
  }
}
</script>

<style scoped>

</style>
