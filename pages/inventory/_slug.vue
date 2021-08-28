<template>
  <div>
    <section class="block1 block1-type2">
      <client-only>
        <img v-if="$vssWidth > 1170" src="/img/inventory/1/bg.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/inventory/1/bg-m.png" alt="" class="bg">
        <img v-if="$vssWidth <= 1170" src="/img/inventory/1/1.png" alt="" class="bg2">
      </client-only>
      <div class="container">
        <h1>Прокат походного <br>инвентаря в Сочи</h1>
        <p>У нас вы можете арендовать профессиональное туристическое оборудование по доступным ценам, а опытные специалисты помогут с выбором и расскажут о самых красивых туристических маршрутах.</p>
        <button v-scroll-to="'#shop'" class="btn">перейти в каталог</button>
      </div>
    </section>
    <ShopBlock id="shop">
      <template v-slot:title>Подберите инветнарь для похода</template>

      <template v-if="$store.getters['products/categories'].length > 0" v-slot:tabs>
        <NuxtLink
          tag="div"
          class="tab"
          active-class="active"
          v-for="category in $store.getters['products/categories']"
          :key="category.id"
          :to="`/inventory/${category.slug}#shop`"
        >
          <span>{{ category.name }}</span>
        </NuxtLink>
      </template>

      <template v-slot:filters>
        <FilterCheckbox
          :value="filter.value"
          @input="updateFilter(filter)"
          :key="filter.id"
          v-for="filter in $store.getters['products/filters']"
        >{{ filter.name }}
        </FilterCheckbox>
      </template>

      <template v-if="$store.getters['products/products'].length > 0" v-slot:products>
        <ProductCard
          v-for="product in $store.getters['products/products']"
          :key="product.id"
          :data="product"
        ></ProductCard>
      </template>

      <template v-slot:pagination>
        <Pagination
          base-category="inventory"
          :sub-category="$route.params.slug || null"
        />
      </template>

      <template v-slot:bottom-title>Прокат походного инвентаря в Сочи с командой "Точка-А"</template>
      <template v-slot:bottom-text>
        <p>В Сочи и его окрестностях  есть много прекраснейших мест, которые не оставят вас равнодушными! Команда "Точка-А" предлагает широкий ассортимент туристического инвентаря, с которым ваше путешествие будет комфортным, живым и запоминающимся! В нашем прокатном центре вы сможете арендовать палатки, спальники, рюкзаки, газовые горелки, посуду, фонарики и многое другое. Наши специалисты подберут для вас лучший вариант снаряжения, а опытные гиды помогут составить маршрут и предоставят сопровождение по красивейшим туристическим местам Краснодарского края. При заказе от двух дней мы предоставляем скидку 10% , от трёх и более дней 20%.</p>
      </template>
    </ShopBlock>
    <ConsultationBlock type="Подбор инвентаря)">
      <template v-slot:title>Не знаете <span>как правильно подобрать инвентарь</span> и не ошибиться при выборе ?
      </template>
      <template v-slot:text>Оставьте заявку и наш менеджер подберёт <br>для вас лучшее решение
      </template>
      <template v-slot:formTitle>Оставьте заявку на <br>подбор инвентаря</template>
    </ConsultationBlock>
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import ConsultationBlock from "~/components/ConsultationBlock";
import ShopBlock from "@/components/Shop/ShopBlock";
import FilterCheckbox from "@/components/Shop/FilterCheckbox";
import ProductCard from "@/components/Shop/ProductCard";
import Pagination from "@/components/Shop/Pagination";

export default {
  name: "index",
  components: {ShopBlock, FilterCheckbox, ProductCard, ConsultationBlock, Pagination},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
  async fetch() {
    await this.$store.dispatch("products/getCategories", 'inventory')
    await this.$store.dispatch("products/getProducts", {
      baseCategory: 'inventory',
      subCategory: this.$route.params.slug || null
    })
    await this.$store.dispatch("products/getFilters", {
      baseCategory: 'inventory',
      subCategory: this.$route.params.slug || null
    })
  },
  methods: {
    updateFilter(filter) {
      this.$store.dispatch("products/setFilterCheckbox", filter.id)
      this.$store.dispatch("products/getProducts", {
        baseCategory: 'inventory',
        subCategory: this.$route.params.slug || null,
        filters: this.$store.getters['products/filters'].filter(f => f.value === true)
      })
    }
  }
}
</script>

<style scoped>

</style>
