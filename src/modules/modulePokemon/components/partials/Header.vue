<template>
  <div class="component-header p-grid">
    <div class="p-col-12 p-md-6">
      <span class="text-pokemon"> API-Pokémon </span>
    </div>
    <div class="p-col p-text-center">
      <router-link to="/">
        Inicio
      </router-link>
    </div>
    <div class="p-col p-text-center">
      <router-link to="/pokemons">
        Pokemones
      </router-link>
    </div>
    <div class="p-col p-text-center">
      <router-link to="/favorites">
        Favoritos
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.component-header {
  background-color: #7c7c7c;
  padding: 20px 40px;
  .text-pokemon {
    color: white;
    font-weight: bold;
  }
  a {
    color: #d3d3d3;
    text-decoration: unset;
    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
