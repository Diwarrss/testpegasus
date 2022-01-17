<template>
  <div class="component-selected-pokemon p-mt-4">
    <DataTable
      ref="dt"
      :value="selectedPokemonList"
      data-key="id"
      :paginator="true"
      :rows="5"
      paginator-template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rows-per-page-options="[5, 10, 25]"
      current-page-report-template="Mostrando registros del {first} al {last} de un total de {totalRecords} registros."
      responsive-layout="scroll"
    >
      <template #empty>
        No has seleccionado un pokémon
      </template>
      <Column header="Favorito">
        <template #body="{ data }">
          <Button
            class="p-button-info"
            label="Agregar"
            @click="addFavoritePokemonList(data)"
          />
        </template>
      </Column>
      <Column
        field="name"
        header="Nombre"
      />
      <Column
        field="height"
        header="Alto"
      />
      <Column
        field="weight"
        header="Ancho"
      />
      <Column header="Imagen">
        <template #body="{ data }">
          <img
            :src="data.sprites.other.dream_world.front_default"
            :alt="data.name"
            class="pokemon-image"
          >
        </template>
      </Column>
      <Column header="Eliminar">
        <template #body="{ data }">
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-danger"
            @click="confirmDeletePokemon(data)"
          />
        </template>
      </Column>
    </DataTable>
    <Dialog
      v-model:visible="deletePokemonDialog"
      :style="{ width: '450px' }"
      header="Alerta"
      :modal="true"
    >
      <div class="confirmation-content">
        <i
          class="pi pi-exclamation-triangle p-mr-3"
          style="font-size: 2rem"
        />
        <span
          v-if="pokemon"
        >¿Estás seguro que quieres borrar <b>{{ pokemon.name }}</b>?</span>
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          class="p-button-text"
          @click="deletePokemonDialog = false"
        />
        <Button
          label="Si"
          icon="pi pi-check"
          class="p-button-text"
          @click="deletePokemon()"
        />
      </template>
    </Dialog>
  </div>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { mapState } from "vuex";
export default {
  components: {
    DataTable,
    Column,
    Button,
    Dialog,
  },
  data: () => ({
    pokemon: {},
    deletePokemonDialog: false,
  }),
  computed: {
    ...mapState(['selectedPokemonList', 'favoritePokemonList'])
  },
  methods: {
    addFavoritePokemonList(data) {
      this.pokemon = { ...data };
      if (this.checkPokemonSelected(this.pokemon.name)) {
        this.$swal({
          position: "top-end",
          icon: "warning",
          title: "Oops...",
          html: `¡<b>${this.pokemon.name}</b> ya existe en favoritos!`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.pokemon = {};
        return;
      }
      this.$store.commit("setFavoritePokemons", this.pokemon);
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Ok...",
        html: `¡<b>${this.pokemon.name}</b> agregado a favoritos!`,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    checkPokemonSelected(name) {
      const check = this.favoritePokemonList.find(
        (pokemon) => pokemon.name === name
      );
      return check;
    },
    confirmDeletePokemon(pokemon) {
      this.pokemon = { ...pokemon };
      this.deletePokemonDialog = true;
    },
    deletePokemon() {
      this.$store.dispatch("deletePokemonSelected", this.pokemon.name);
      this.deletePokemonDialog = false;
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Ok...",
        html: `¡<b>${this.pokemon.name}</b> fue eliminado!`,
        showConfirmButton: false,
        timer: 1500,
      });
      this.pokemon = {};
    },
  },
};
</script>
<style lang="scss">
.component-selected-pokemon {
  .p-datatable {
    .pokemon-image {
      height: 40px;
      width: auto;
    }
    .p-datatable-thead {
      tr > th {
        color: #000;
        background: unset;
        border-color: #666666;
      }
    }
    .p-datatable-tbody {
      tr > td {
        color: #000;
        background: unset;
        border-color: #666666;
      }
    }
    .p-paginator {
      justify-content: end;
      @media (max-width: 576px) {
        justify-content: center;
        .p-paginator-rpp-options {
          margin-top: 10px;
        }
      }
      .p-paginator-element {
        border: unset;
        color: #000;
      }
      .p-link:focus {
        box-shadow: unset;
      }
      .p-highlight {
        color: #000;
        background: #eaeaea;
        border-color: #eaeaea;
        border-radius: 50%;
      }
      .p-paginator-element {
        &:hover {
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
