import { createStore } from "vuex";
export default createStore({
  state: {
    data: {},
    selectedPokemonList: []
  },
  mutations: {
    setPokemons: (state, pokemons) => {
      state.data = pokemons;
    },
    setSelectedPokemons: (state, data) => {
      state.selectedPokemonList.push(data);
    }
  },
  actions: {},
  modules: {},
});
