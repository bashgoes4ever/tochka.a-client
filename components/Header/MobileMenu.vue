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
      <div class="menu-item flex-between align-center">
        <NuxtLink to="/tours">туры</NuxtLink>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.89209 12.4601L8.21932 8.21908L12.4604 6.89185L11.1331 11.1329L6.89209 12.4601Z" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="9.67615" cy="9.6759" r="8.00915" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div class="menu-item flex-between align-center">
        <NuxtLink to="/gallery">Фотогалерея</NuxtLink>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6753 5.58331V12.375C16.6753 14.8916 15.1003 16.6666 12.5837 16.6666H5.37533C2.85866 16.6666 1.29199 14.8916 1.29199 12.375V5.58331C1.29199 3.06665 2.86699 1.29248 5.37533 1.29248H12.5837C15.1003 1.29248 16.6753 3.06665 16.6753 5.58331Z" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.40137 12.6936L4.67553 11.3495C5.1347 10.8645 5.90553 10.862 6.36887 11.3428L7.10637 12.0953C7.60387 12.6028 8.43137 12.5661 8.8822 12.017L10.7397 9.75781C11.273 9.10864 12.2514 9.06864 12.8355 9.67114L14.5655 11.4561" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.59486 6.61206C7.59486 7.41872 6.93986 8.07372 6.1332 8.07372C5.32653 8.07372 4.67236 7.41872 4.67236 6.61206C4.67236 5.80539 5.32653 5.15039 6.1332 5.15039C6.93986 5.15039 7.59486 5.80539 7.59486 6.61206Z" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div class="menu-item flex-between align-center">
        <NuxtLink to="/reviews">Отзывы</NuxtLink>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.41277 11.1592C5.87547 11.1592 5.43896 10.7227 5.43896 10.1854C5.43896 9.64964 5.87547 9.21313 6.41277 9.21313C6.95008 9.21313 7.38658 9.64964 7.38658 10.1854C7.38658 10.7227 6.95008 11.1592 6.41277 11.1592ZM10.1984 11.1592C9.66109 11.1592 9.22458 10.7227 9.22458 10.1854C9.22458 9.64964 9.66109 9.21313 10.1984 9.21313C10.7357 9.21313 11.1722 9.64964 11.1722 10.1854C11.1722 10.7227 10.7357 11.1592 10.1984 11.1592ZM13.0104 10.1854C13.0104 10.7227 13.4469 11.1592 13.9842 11.1592C14.5215 11.1592 14.958 10.7227 14.958 10.1854C14.958 9.64964 14.5215 9.21313 13.9842 9.21313C13.4469 9.21313 13.0104 9.64964 13.0104 10.1854Z" fill="#20292D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.017 1.66675C5.17533 1.66675 1.66699 5.62185 1.66699 10.0126C1.66699 11.4147 2.07533 12.8577 2.79199 14.1763C2.92533 14.3942 2.94199 14.6688 2.85033 14.9283L2.29199 16.7978C2.16699 17.2485 2.55033 17.5815 2.97533 17.4479L4.65866 16.948C5.11699 16.7978 5.47533 16.9889 5.90033 17.2485C7.11699 17.9654 8.63366 18.3334 10.0003 18.3334C14.1337 18.3334 18.3337 15.137 18.3337 9.98756C18.3337 5.54674 14.7503 1.66675 10.017 1.66675Z" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div class="menu-item flex-between align-center">
        <NuxtLink to="/">Расписание</NuxtLink>
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.57715 7.83713H16.4304" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.702 11.0915H12.7097" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00372 11.0915H9.01144" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.29816 11.0915H5.30588" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.702 14.3303H12.7097" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00372 14.3303H9.01144" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.29816 14.3303H5.30588" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.3699 1.66675V4.40906" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.63795 1.66675V4.40906" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5319 2.98267H5.4758C3.02856 2.98267 1.5 4.34594 1.5 6.85185V14.3932C1.5 16.9385 3.02856 18.3333 5.4758 18.3333H12.5242C14.9791 18.3333 16.5 16.9622 16.5 14.4563V6.85185C16.5077 4.34594 14.9868 2.98267 12.5319 2.98267Z" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div class="menu-item flex-between align-center">
        <NuxtLink to="/blog">блог</NuxtLink>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.4165 14.5817H14.7307" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.71259 2.12975C9.32675 1.34725 10.3193 1.38809 11.1026 2.00225L12.2609 2.91059C13.0443 3.52475 13.3218 4.47725 12.7076 5.26142L5.80009 14.0739C5.56925 14.3689 5.21675 14.5431 4.84175 14.5473L2.17759 14.5814L1.57426 11.9856C1.48926 11.6214 1.57426 11.2381 1.80509 10.9423L8.71259 2.12975Z" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.41895 3.78003L11.4139 6.9117" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div class="menu-item flex-between align-center">
        <NuxtLink to="/contacts">Контакты</NuxtLink>
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.53271 7.65957C1.54472 4.12574 4.41918 1.27075 7.95301 1.28275C11.4868 1.29476 14.3418 4.16922 14.3298 7.70304V7.77551C14.2863 10.0726 13.0037 12.1958 11.4313 13.8552C10.532 14.7891 9.52772 15.6158 8.43851 16.319C8.14727 16.5709 7.71527 16.5709 7.42402 16.319C5.80027 15.2621 4.37516 13.9278 3.21387 12.377C2.17884 11.0246 1.59119 9.38326 1.53271 7.6813L1.53271 7.65957Z" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="7.93158" cy="7.7829" rx="2.05072" ry="2.05072" stroke="#20292D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
    </div>
    <div class="menu" v-if="current === 2">
      <div class="menu-item">
        <div class="current flex-between align-center">
          Туристическое оборудование
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div class="dropdown-menu">
          <NuxtLink to="/inventory/palatki" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/1.png" alt="">
            </div>
            <span>Палатки</span>
          </NuxtLink>
          <NuxtLink to="/inventory/spalniki" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/2.png" alt="">
            </div>
            <span>Спальники</span>
          </NuxtLink>
          <NuxtLink to="/inventory/ryukzaki" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/3.png" alt="">
            </div>
            <span>Рюкзаки</span>
          </NuxtLink>
          <NuxtLink to="/inventory/oborudovanie" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/4.png" alt="">
            </div>
            <span>Оборудование</span>
          </NuxtLink>
        </div>
      </div>
      <div class="menu-item">
        <div class="current flex-between align-center">
          Авто и велотранспорт
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div class="dropdown-menu">
          <NuxtLink to="/auto" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/5.png" alt="">
            </div>
            <span>Автомобили</span>
          </NuxtLink>
          <NuxtLink to="/bicycle" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/6.png" alt="">
            </div>
            <span>Велосипеды</span>
          </NuxtLink>
          <NuxtLink to="/moped" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/7.png" alt="">
            </div>
            <span>Мопеды</span>
          </NuxtLink>
        </div>
      </div>
      <div class="menu-item">
        <div class="current flex-between align-center">
          Морской транспорт
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6668 1.66675L6.00016 6.33341L1.3335 1.66675" stroke="#20292D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
        <div class="dropdown-menu">
          <NuxtLink to="/boat" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/8.png" alt="">
            </div>
            <span>Яхты</span>
          </NuxtLink>
          <NuxtLink to="/aquabike" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/9.png" alt="">
            </div>
            <span>Водные скутеры</span>
          </NuxtLink>
          <NuxtLink to="/diving" class="dropdown-item">
            <div class="img">
              <img src="/img/menu/mob/10.png" alt="">
            </div>
            <span>Дайвинг</span>
          </NuxtLink>
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
