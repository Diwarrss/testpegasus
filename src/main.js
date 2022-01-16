import { createApp } from 'vue'
import App from './App.vue'
import storePokemon from '@/modules/modulePokemon/store'
import routerPokemon from '@/modules/modulePokemon/router'
import PrimeVue from 'primevue/config';

/**Config vue-sweelalert2 */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

/**Config axios */
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(routerPokemon).use(storePokemon).use(PrimeVue).use(VueAxios, axios).use(VueSweetalert2).mount('#app')
