<template>
  <div class="page-pokemones">
    <PokemonList />
    <SelectedPokemonTable />
  </div>
</template>
<script>
import PokemonList from "@/modules/modulePokemon/components/PokemonList.vue";
import SelectedPokemonTable from "@/modules/modulePokemon/components/SelectedPokemonTable.vue";
import { consoleLogError } from '@/modules/modulePokemon/mixins/notify.js'
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
        consoleLogError(error)
      }
    },
  },
};
</script>
