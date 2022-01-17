import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'

export default createStore({
  state: {
    pokemons: {},
    selectedPokemonList: [],
    favoritePokemonList: []
  },
  mutations: {
    setPokemons: (state, data) => {
      state.pokemons = data;
    },
    setSelectedPokemons: (state, data) => {
      state.selectedPokemonList.push(data);
    },
    setFavoritePokemons: (state, data) => {
      state.favoritePokemonList.push(data);
    }
  },
  actions: {
    deletePokemonSelected({ state }, name){
      state.selectedPokemonList = state.selectedPokemonList.filter(pokemon => pokemon.name !== name);
    }
  },
  getters: {

  },
  plugins:[
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
});
