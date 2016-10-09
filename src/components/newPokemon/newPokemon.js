import template from './newPokemon.html';
import styles from './newPokemon.scss';

export default {
  template,
  controllerAs: 'newPokemon',
  bindings: {
    add: '&'
  },
  controller
};

controller.inject = ['pokemonService'];

function controller (pokemonService) {
  pokemonService.get()
    .then(pokemons => {
      this.pokemons = pokemons;
    });
  this.styles = styles;
  this.submit = () => {
    let pokemon = this.pokemon;
    // console.log(pokemon, 'submit says this');
    this.add({pokemon});
    this.pokemon = {};
  };
}
