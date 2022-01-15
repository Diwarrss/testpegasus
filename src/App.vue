<template>
  <Header />
  <router-view />
</template>
<script>
import Header from "@/modules/modulePokemon/components/partials/Header.vue";
export default {
  components: {
    Header,
  },
}
</script>
<style lang="scss">
/**Add PrimeVue and PrimeFlex */
@import "~primevue/resources/primevue.min.css";
@import "~primevue/resources/themes/tailwind-light/theme.css";
@import "~primeicons/primeicons.css";
@import '~primeflex/primeflex.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
