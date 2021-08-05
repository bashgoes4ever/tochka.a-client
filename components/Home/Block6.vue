<template>
  <section class="block6">
    <div class="container">
      <img src="/img/home/block6/bg1.png" alt="" class="bg1">
      <img src="/img/home/block6/bg2.png" alt="" class="bg2">
      <h2 class="section__title">Другие <span>услуги аренды</span> <br>в нашем магазине</h2>
      <div class="block6__flex flex-between">
        <CategoryCard
          v-for="category in categories"
          :key="category.id"
          :data="category"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryCard from "~/components/Home/CategoryCard";

export default {
  name: "Block6",
  components: {CategoryCard},
  data: () => ({
    categories: [
      {
        id: 1,
        src: '/img/home/block6/1.png',
        url: '/boat',
        title: 'Яхты'
      },
      {
        id: 2,
        src: '/img/home/block6/2.png',
        url: '/auto',
        title: 'Авто'
      },
      {
        id: 3,
        src: '/img/home/block6/3.png',
        url: '/aquabike',
        title: 'Водные скутеры'
      },
      {
        id: 4,
        src: '/img/home/block6/4.png',
        url: '/scooter',
        title: 'Электросамокаты'
      },
      {
        id: 5,
        src: '/img/home/block6/5.png',
        url: '/moped',
        title: 'Мопеды'
      },
      {
        id: 6,
        src: '/img/home/block6/6.png',
        url: '/',
        title: 'Дайвинг'
      },
      {
        id: 7,
        src: '/img/home/block6/7.png',
        url: '/bicycle',
        title: 'Велосипеды'
      },
    ]
  })
}
</script>

<style scoped>

</style>
