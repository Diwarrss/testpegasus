<template>
  <div class="component-favorite-pokemon">
    <h3 class="title">
      Tus Favoritos
    </h3>
    <div class="p-grid">
      <div
        v-for="(pokemon, key) in favorites"
        :key="key"
        class="p-col-12 p-md-6"
      >
        <Fieldset :legend="pokemon.name">
          <div class="p-d-flex p-jc-center p-ai-center">
            <img
              :src="pokemon.sprites.other.dream_world.front_default"
              :alt="pokemon.name"
              class="pokemon-image"
            >
          </div>
        </Fieldset>
      </div>
    </div>
  </div>
</template>
<script>
import Fieldset from "primevue/fieldset";
import { mapState } from "vuex";
export default {
  components: {
    Fieldset,
  },
  computed: {
    ...mapState({favorites: 'favoritePokemonList'})
  },
};
</script>
<style lang="scss">
.component-favorite-pokemon {
  .title {
    font-size: 30px;
    font-weight: normal;
  }
  .p-fieldset-legend-text {
    text-transform: capitalize;
  }
  .pokemon-image {
    width: auto;
    height: 150px;
  }
}
</style>
