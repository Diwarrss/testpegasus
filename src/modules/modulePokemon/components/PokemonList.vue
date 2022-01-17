<template>
  <div class="component-pokemon-list">
    <Fieldset legend="Lista de Pokemones">
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
export default {
  components: {
    Fieldset,
    Button,
  },
  data: () => ({
    showPrevious: false,
  }),
  computed: {
    pokemons() {
      return this.$store.state.data;
    },
    selectedPokemonList() {
      return this.$store.state.selectedPokemonList;
    },
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
    async selectPokemon(name) {
      if (this.checkPokemonSelected(name)) {
        this.$swal({
          position: "top-end",
          icon: "warning",
          title: "Oops...",
          html: `¡<b>${name}</b> ya existe en la lista!`,
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      try {
        const { data: pokemon } = await this.axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        this.$store.commit("setSelectedPokemons", pokemon);
        this.pokemons.next && this.pokemons.previous
          ? (this.showPrevious = true)
          : (this.showPrevious = false);
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
    checkPokemonSelected(name) {
      const check = this.selectedPokemonList.find(
        (selectPokemon) => selectPokemon.name === name
      );
      return check;
    },
  },
};
</script>
<style lang="scss">
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
