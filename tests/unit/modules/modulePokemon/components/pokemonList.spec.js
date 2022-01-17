import { shallowMount } from "@vue/test-utils";
import PokemonList from "@/modules/modulePokemon/components/PokemonList";

describe("PokemonList.vue", () => {
  test("Debe de ser igual con el snapshot", () => {
    const wrapper = shallowMount(PokemonList);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
