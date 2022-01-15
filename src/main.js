import { createApp } from 'vue'
import App from './App.vue'
import storePokemon from '@/modules/modulePokemon/store'
import routerPokemon from '@/modules/modulePokemon/router'
import PrimeVue from 'primevue/config';

/**Config axios */
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(routerPokemon).use(storePokemon).use(PrimeVue).use(VueAxios, axios).mount('#app')
