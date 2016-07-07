import template from './newPokemon.html';
import styles from './newPokemon.scss';

export default {
  template,
  controllerAs: 'newpokemon',
  bindings: {
    add: '&'
  },
  controller
};

controller.inject = ['pokemonService'];

function controller (pokemonService) {
  pokemonService.get()
    .then(pokemons => {
      this.games = pokemons;
    });
  this.styles = styles;
  this.submit = () => {
    let pokemon = this.pokemon;
    this.add({pokemon});
    this.pokemon = {};
  };
}
