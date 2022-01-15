import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/modules/modulePokemon/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: () => import(/* webpackChunkName: "PokemonsPage" */ '@/modules/modulePokemon/views/Pokemons.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "FavoritesPage" */ '@/modules/modulePokemon/views/Favorites.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
