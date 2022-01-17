import { shallowMount } from "@vue/test-utils";
import Pokemons from "@/modules/modulePokemon/views/Pokemons";

describe("Pokemons.vue", () => {
  test("Verificar que el view no se modifico", () => {
    const wrapper = shallowMount(Pokemons);
    expect(wrapper.html()).toMatchSnapshot()
  });
});
