pokemonService.$inject = ['$http', 'apiUrl'];

export default function pokemonService ($http, apiUrl) {

  return{
    get() {
      return $http
      .get(`${apiUrl}/pokemon`)
      .then(r => r.data);
    },
    add(pokemon) {
      return $http
      .post(`${apiUrl}/pokemon`, pokemon)
      .then(r => r.data);
    }
  };
}
