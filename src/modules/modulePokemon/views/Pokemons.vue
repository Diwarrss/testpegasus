<template>
  <div class="page-pokemones">
    <PokemonList :pokemons="pokemons" />
    <TableFavorites />
  </div>
</template>
<script>
import PokemonList from "@/modules/modulePokemon/components/PokemonList.vue";
import TableFavorites from "@/modules/modulePokemon/components/TableFavorites.vue";
export default {
  components: {
    PokemonList,
    TableFavorites
  },
  data(){
    return {
      pokemons: []
    }
  },
  created() {
    this.getPokemons()
  },
  methods: {
    getPokemons(){
      this.axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        this.pokemons = res.data
        console.log(res)
      })
      .catch(err => {
        console.error(err); 
      })
    }
  }
}
</script>