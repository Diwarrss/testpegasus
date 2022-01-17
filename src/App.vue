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
  .p-button-info{
    width: 100px;
    height: 35px;
    background-color:#17a2b8;
    border-color: #17a2b8;
  }
}
</style>
