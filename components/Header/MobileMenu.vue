<template>
<div class="mobile-menu">
  <div class="menu-tabs flex-between">
    <div
      @click="current = 1"
      :class="[
        'menu-tab',
        {'active': current === 1}
      ]"
    >
      <span>меню</span>
    </div>
    <div
      @click="current = 2"
      :class="[
        'menu-tab',
        {'active': current === 2}
      ]"
    >
      <span>прокат</span>
    </div>
  </div>
  <div class="menus">
    <div class="menu" v-if="current === 1">
      <div class="menu-item">
        <NuxtLink to="/tours">туры</NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink to="/gallery">Фотогалерея</NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink to="/reviews">Отзывы</NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink to="/">Расписание</NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink to="/blog">блог</NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </div>
    </div>
    <div class="menu" v-if="current === 2">
      <div class="menu-item">
        <div class="current">
          Туристическое оборудование
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-item">
            <NuxtLink to="/inventory/palatki">Палатки</NuxtLink>
          </div>
          <div class="dropdown-item">
            <NuxtLink to="/inventory/spalniki">Спальники</NuxtLink>
          </div>
          <div class="dropdown-item">
            <NuxtLink to="/inventory/ryukzaki">Рюкзаки</NuxtLink>
          </div>
          <div class="dropdown-item">
            <NuxtLink to="/inventory/oborudovanie">Оборудование</NuxtLink>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <div class="current">
          Авто и велотранспорт
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-item">
            <NuxtLink to="/auto">Автомобили</NuxtLink>
          </div>
          <div class="dropdown-item">
            <NuxtLink to="/bicycle">Велосипеды</NuxtLink>
          </div>
          <div class="dropdown-item">
            <NuxtLink to="/moped">Мопеды</NuxtLink>
          </div>
          <div class="dropdown-item">
            <NuxtLink to="/scooter">Самокаты</NuxtLink>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <div class="current">
          Морской транспорт
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-item">
            <NuxtLink to="/boat">Яхты</NuxtLink>
          </div>
          <div class="dropdown-item">
            <NuxtLink to="/aquabike">Водные скутеры</NuxtLink>
          </div>
          <div class="dropdown-item">
            <NuxtLink to="/">Дайвинг</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MobileMenu",
  data: () => ({
    current: 1
  })
}
</script>

<style scoped>

</style>
