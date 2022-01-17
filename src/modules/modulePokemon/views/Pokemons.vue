<template>
  <div class="page-pokemones">
    <PokemonList />
    <SelectedPokemonTable />
  </div>
</template>
<script>
import PokemonList from "@/modules/modulePokemon/components/PokemonList.vue";
import SelectedPokemonTable from "@/modules/modulePokemon/components/SelectedPokemonTable.vue";
export default {
  components: {
    PokemonList,
    SelectedPokemonTable
  },
  created() {
    this.getPokemons()
  },
  methods: {
    getPokemons(){
      this.axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(res => {
        this.$store.commit('setPokemons', res.data)
      })
      .catch(err => {
        console.error(err); 
      })
    }
  }
}
</script>