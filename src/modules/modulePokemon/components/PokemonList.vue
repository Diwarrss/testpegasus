<template>
  <div class="component-pokemon-list">
    <Fieldset
      v-if="pokemons.results.length"
      legend="Lista de Pokemones"
    >
      <div class="p-grid">
        <div
          v-for="(pokemon, key) in pokemons.results"
          :key="key"
          class="p-col-12 p-md-6"
        >
          <div class="p-d-flex p-jc-between p-ai-center pokemon-info">
            <h3 class="p-text-capitalize">
              {{ pokemon.name }}
            </h3>
            <Button
              :id="`btn-${pokemon.name}`"
              label="Info"
              class="p-button-info"
              @click.prevent="selectPokemon(pokemon.name)"
            />
          </div>
        </div>
      </div>
    </Fieldset>
    <div class="pagination-buttons">
      <Button
        v-if="showPrevious"
        label="Anterior"
        class="p-button-outlined p-button-secondary p-mr-4"
        @click.prevent="changePage('previus')"
      />
      <Button
        label="Siguiente"
        class="p-button-secondary p-mr-4"
        @click.prevent="changePage('next')"
      />
    </div>
  </div>
</template>
<script>
import Fieldset from "primevue/fieldset";
import Button from "primevue/button";
import { mapState } from "vuex";
import { consoleLogError, notifyAddFail, notifyAddSuccessful } from '@/modules/modulePokemon/mixins/notify.js'
export default {
  components: {
    Fieldset,
    Button,
  },
  data: () => ({
    showPrevious: false,
  }),
  computed: {
    ...mapState(['pokemons', 'selectedPokemonList'])
  },
  methods: {
    async changePage(action) {
      let url = "";
      action === "next"
        ? (url = this.pokemons.next)
        : (url = this.pokemons.previous);

      try {
        const { data: pokemons } = await this.axios.get(url);
        this.$store.commit("setPokemons", pokemons);
        this.pokemons.next && this.pokemons.previous
          ? (this.showPrevious = true)
          : (this.showPrevious = false);
      } catch (error) {
        consoleLogError(error)
      }
    },
    async selectPokemon(name) {
      let btn = document.getElementById(`btn-${name}`)
      btn.disabled = true
      if (this.checkPokemonSelected(name)) {
        notifyAddFail(name)
        btn.disabled = false
        return;
      }
      
      try {
        notifyAddSuccessful(name)
        const { data: pokemon } = await this.axios.get(`/pokemon/${name}`);
        this.$store.commit("setSelectedPokemons", pokemon);
        this.pokemons.next && this.pokemons.previous
          ? (this.showPrevious = true)
          : (this.showPrevious = false);
        btn.disabled = false
      } catch (error) {
        btn.disabled = false
        consoleLogError(error)
      }
    },
    checkPokemonSelected(name) {
      const check = this.selectedPokemonList.find(
        (selectPokemon) => selectPokemon.name === name
      );
      return check;
    },
  },
};
</script>
<style lang="scss" scoped>
.component-pokemon-list {
  .pokemon-info {
    width: 80%;
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  .pagination-buttons {
    margin-top: 25px;
    .p-button {
      width: 130px;
      height: 35px;
    }
  }
}
</style>
