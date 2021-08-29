<template>
<footer>
  <div class="container">
    <div class="footer__flex flex-between align-start">
      <NuxtLink class="logo" to="/">
        <img src="/img/logo.png" alt="">
      </NuxtLink>
      <div class="menu flex-start align-start">
        <div class="col">
          <div class="head">
            Походный инвентарь
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <ul>
            <li>
              <NuxtLink to="/inventory/palatki">Палатки</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/inventory/ryukzaki">Рюкзаки</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/inventory/spalniki">Спальники</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/inventory/oborudovanie">Оборудование</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="head">
            Транспорт
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
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
              <NuxtLink to="/scooter">Электросамокаты</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="head">
            Водный транспорт
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
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
        </div>
      </div>
      <div class="col">
        <div class="head">Контакты</div>
        <ul>
          <li>8 800 2000 600</li>
          <li>Berudivan@mail.</li>
          <li>10:00 - 20:00 <br>без выходных</li>
          <li class="action">Написать нам</li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
