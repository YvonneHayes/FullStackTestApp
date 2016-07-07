import template from './viewSelector.html';
import styles from './viewSelector.scss';

export default {
  template,
  controllerAs: 'viewSelector',
  controller
};

controller.inject = ['pokemonService'];

function controller(pokemonService) {
  this.styles = styles;
  this.getPokemons = (pokemon) => {
    pokemonService.get(pokemon)
    .then(pokemon => this.pokemon = pokemon)
    .catch(err => console.error(err));
  };

  this.addPokemons = (pokemon) => {
    console.log(pokemon + 'this is pokemon');
    pokemonService.add(pokemon)
      .then(pokemon => this.pokemons.push(pokemon))
      .catch(err => console.error(err));
  };
  pokemonService.get().then(pokemons => this.pokemons = pokemons);


  this.view = 'tile';
}
