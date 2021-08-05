<template>
  <header :class="$store.getters['menu/isActive'] && 'active'">
    <div class="container">
      <div class="flex-between align-center">
        <NuxtLink class="logo-m" to="/">
          <img src="/img/logo.png" alt="">
        </NuxtLink>
        <div class="icons flex-start align-center">
          <a href="tel:89009009090" class="icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.57072 0.338538C8.422 0.31722 8.27262 0.36119 8.15377 0.455791C8.03161 0.551725 7.95526 0.690297 7.93866 0.845524C7.90347 1.15931 8.12987 1.44311 8.44325 1.47842C10.6044 1.71959 12.2841 3.4031 12.5271 5.57095C12.5596 5.86141 12.8033 6.0806 13.0941 6.0806C13.116 6.0806 13.1373 6.07926 13.1592 6.0766C13.3112 6.05994 13.4467 5.98466 13.5423 5.86474C13.6372 5.74483 13.6804 5.59559 13.6631 5.44303C13.3603 2.73822 11.267 0.638999 8.57072 0.338538ZM8.61223 2.65989C8.29487 2.60126 8.0034 2.80379 7.94298 3.11358C7.88256 3.42336 8.08573 3.72582 8.39446 3.78645C9.32397 3.96766 10.0417 4.68716 10.2236 5.61985V5.62052C10.2754 5.889 10.5117 6.0842 10.784 6.0842C10.8205 6.0842 10.857 6.08087 10.8942 6.07421C11.2029 6.01225 11.4061 5.71046 11.3456 5.40001C11.0741 4.00696 10.0018 2.93104 8.61223 2.65989ZM9.66688 9.06034C9.96786 8.88679 10.3078 8.69078 10.7366 8.78199C11.125 8.86394 12.4489 9.93853 12.8114 10.3109C13.0491 10.5548 13.1812 10.8066 13.2018 11.0584C13.2377 12.0464 11.8952 13.1743 11.6509 13.3149C11.3262 13.5487 10.9484 13.6666 10.5242 13.6666C10.0906 13.6666 9.60726 13.5434 9.0801 13.2976C6.21987 12.1037 1.85052 7.82065 0.69527 4.9826C0.215909 3.926 0.21259 3.05459 0.687303 2.39971C0.876524 2.09259 1.95542 0.808804 2.92144 0.849443C3.17839 0.871428 3.42802 1.00334 3.67302 1.24317C4.04349 1.60626 5.09118 2.93401 5.17218 3.32374C5.26181 3.75678 5.06529 4.10121 4.89067 4.40367C4.85343 4.46869 4.80325 4.54585 4.74827 4.63038C4.53963 4.9512 4.26192 5.37821 4.36019 5.65081C5.06462 7.38029 6.69193 8.88925 8.42214 9.5981C8.68971 9.69535 9.11649 9.41566 9.43627 9.20608C9.51958 9.15148 9.59563 9.10164 9.65971 9.06447L9.66688 9.06034Z" fill="#22252C"/>
</svg>
          </a>
          <div class="icon" @click="$store.dispatch('menu/setMenu', !$store.getters['menu/isActive'])">
            <svg v-if="!$store.getters['menu/isActive']" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 2V0H18V2H0Z" fill="#22252C"/>
<path d="M0 7H18V5H0V7Z" fill="#22252C"/>
<path d="M9 12H18V10H9V12Z" fill="#22252C"/>
</svg>
            <svg v-if="$store.getters['menu/isActive']" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#20292D"/>
</svg>
          </div>
          <BasketIcon class="icon" />
        </div>
      </div>
    </div>
    <MobileMenu v-scroll-lock="$store.getters['menu/isActive']" v-if="$store.getters['menu/isActive']" />
  </header>
</template>

<script>
import BasketIcon from "~/components/Header/BasketIcon";
import MobileMenu from "@/components/Header/MobileMenu";
export default {
  name: "HeaderMobile",
  components: {BasketIcon, MobileMenu},
}
</script>

<style scoped>

</style>
