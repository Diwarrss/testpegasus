<template>
  <h2>lista pokemons</h2>
  {{ pokemons }}
</template>
<script>
export default {
  props: {
    pokemons:{
      type: Object,
      required: true
    }
  }
}
</script>