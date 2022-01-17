// Importamos las utilidades de la librería vue-test-utils
import { mount } from '@vue/test-utils';
import Header from '@/modules/modulePokemon/components/partials/Header.vue';

describe('Header.vue', () => {
  let wrapper = mount(Header);

  it('El componente se ha pintado', () => {
    wrapper = mount(Header);
  });

  it('Comprobamos que el título se esta pintando', () => {
    expect(wrapper.html().includes('API-Pokémon')).toBeTruthy();
  });
});