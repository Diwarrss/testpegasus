<template>
  <div class="component-pokemon-list">
    <Fieldset legend="Lista de Pokemones">
      <div class="p-grid">
        <div
          v-for="(pokemon, key) in pokemons.results"
          :key="key" 
          class="p-col-6"
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
import Fieldset from 'primevue/fieldset';
import Button from 'primevue/button';
export default {
  components: {
    Fieldset,
    Button
  },
  data: () => ({
    showPrevious: false,
  }),
  computed:{
    pokemons(){
      return this.$store.state.data
    },
    selectedPokemonList(){
      return this.$store.state.selectedPokemonList
    }
  },
  methods: {
    changePage(action) {
      let url = ''
      action === 'next' ? url = this.pokemons.next : url = this.pokemons.previous
      this.axios.get(url)
      .then(res => {
        this.$store.commit('setPokemons', res.data)
        this.pokemons.next && this.pokemons.previous ? this.showPrevious = true : this.showPrevious = false
      })
      .catch(err => {
        console.error(err); 
      })      
    },
    selectPokemon(name){
      if (this.checkPokemonSelected(name)) {
        this.$swal({
          position: 'top-end',
          icon: 'warning',
          title: 'Oops...',
          text: `${name} ya existe en la lista!`,
          showConfirmButton: false,
          timer: 1500
        });
        return
      }
      this.axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        this.$store.commit('setSelectedPokemons', res.data)
      })
      .catch(err => {
        console.error(err); 
      })
    },
    checkPokemonSelected(name) {
      const check = this.selectedPokemonList.find(
        (selectPokemon) => selectPokemon.name === name
      );
      return check
    },
  }
}
</script>
<style lang="scss">
.component-pokemon-list{
  .p-fieldset{
    border: 1px solid black;
  }
  .p-fieldset .p-fieldset-legend {
    color: black;
    border-radius: unset;
    border: unset;
    background-color:unset;
    font-weight: normal;
  }
  .pokemon-info{
    width: 80%;
    .p-button-info{
      width: 100px;
      height: 35px;
      background-color:#17a2b8;
      border-color: #17a2b8;
    }
  }
  .pagination-buttons{
    margin-top: 25px;
    .p-button{
      width: 130px;
      height: 35px;
    }
  }
}
</style>