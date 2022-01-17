import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'

export default createStore({
  state: {
    data: {},
    selectedPokemonList: [],
    favoritePokemonList: []
  },
  mutations: {
    setPokemons: (state, pokemons) => {
      state.data = pokemons;
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
  plugins:[
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
});
