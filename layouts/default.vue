<template>
  <div class="page-wrapper">
    <Header />
    <nuxt />
    <Footer />
    <Socials />
    <Agreements />
    <NotificationsGroup />
  </div>
</template>

<script>
import Header from "~/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";
import Agreements from "@/components/Footer/Agreements";
import NotificationsGroup from "@/components/Notifications/NotificationsGroup";
export default {
  name: "default",
  components: {Header, Footer, Socials, Agreements, NotificationsGroup},
  middleware: 'closeMenu'
}
</script>

<style scoped>
</style>
