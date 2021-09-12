<template>
  <div class="page-wrapper">
    <Header/>
    <nuxt/>
    <Footer/>
    <Socials/>
    <Agreements/>
    <NotificationsGroup/>
    <Layer v-if="$store.getters['popup/showLayer']"/>
    <Loader v-if="$store.getters['popup/isLoading']"/>
  </div>
</template>

<script>
import Header from "~/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Socials from "@/components/Footer/Socials";
import Agreements from "@/components/Footer/Agreements";
import NotificationsGroup from "@/components/Notifications/NotificationsGroup";
import Layer from "@/components/Popups/Layer";
import Loader from "@/components/Loader";

export default {
  name: "default",
  components: {Header, Footer, Socials, Agreements, NotificationsGroup, Layer, Loader},
  middleware: 'closeMenu',
  data: () => ({
    title: 'Tochka A Sochi',
    keywords: '',
    description: ''
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {hid: 'description', name: 'description', content: this.description},
        {hid: 'keywords', name: 'keywords', content: this.keywords}
      ]
    }
  },
  async fetch() {
    await this.getMeta()
  },
  watch: {
    async $route() {
      await this.getMeta()
    }
  },
  methods: {
    async getMeta() {
      try {
        const url = this.$route.path
        const {data} = await this.$axios({
          url: `/api/v1/meta?url=${url}`,
          method: 'GET'
        })
        this.title = data.title
        this.description = data.description
        this.keywords = data.keywords
      } catch (e) {
        this.title = 'Tochka A Sochi'
      }
    }
  }
}
</script>

<style scoped>
</style>
