import { createApp } from 'vue'
import App from './App.vue'
import storePokemon from '@/modules/modulePokemon/store'
import routerPokemon from '@/modules/modulePokemon/router'
import PrimeVue from 'primevue/config';

/**Config axios */
import Axios from 'axios'
import VueAxios from 'vue-axios'

const axios = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

createApp(App).use(routerPokemon).use(storePokemon).use(PrimeVue).use(VueAxios, axios).mount('#app')