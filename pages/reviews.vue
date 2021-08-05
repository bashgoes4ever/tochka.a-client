<template>
  <div>
    <Breadcrumbs>
      <template v-slot:links>
        <NuxtLink to="/">Главная</NuxtLink>
        /
        <span>Отзывы</span>
      </template>
    </Breadcrumbs>
    <Block7 padding="true" />
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
import Block7 from "~/components/Home/Block7";
export default {
  name: "reviews",
  components: {Breadcrumbs, Block7}
}
</script>

<style scoped>

</style>
