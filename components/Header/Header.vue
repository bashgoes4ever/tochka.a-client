<template>
  <div>
    <client-only>
      <HeaderDesktop v-if="$vssWidth > 1170"/>
    </client-only>
    <client-only>
      <HeaderMobile v-if="$vssWidth <= 1170"/>
    </client-only>
  </div>
</template>

<script>
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'
import HeaderDesktop from "~/components/Header/HeaderDesktop";
import HeaderMobile from "~/components/Header/HeaderMobile";

export default {
  name: "Header",
  components: {HeaderDesktop, HeaderMobile},
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
}
</script>

<style scoped>

</style>
