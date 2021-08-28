<template>
  <div class="page-wrapper">
    <Header />
    <nuxt />
    <Footer />
    <Socials />
    <Agreements />
    <NotificationsGroup />
    <Layer v-if="$store.getters['popup/showLayer']" />
  </div>
</template>

<script>
import Header from "~/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";
import Agreements from "@/components/Footer/Agreements";
import NotificationsGroup from "@/components/Notifications/NotificationsGroup";
import Layer from "@/components/Popups/Layer";
export default {
  name: "default",
  components: {Header, Footer, Socials, Agreements, NotificationsGroup, Layer},
  middleware: 'closeMenu'
}
</script>

<style scoped>
</style>
