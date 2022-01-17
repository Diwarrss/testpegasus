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
    SelectedPokemonTable,
  },
  async created() {
    this.getPokemons();
  },
  methods: {
    async getPokemons() {
      try {
        const { data: pokemons } = await this.axios.get("/pokemon?limit=10");
        this.$store.commit("setPokemons", pokemons);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error);
      }
    },
  },
};
</script>
