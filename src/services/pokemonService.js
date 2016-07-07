pokemonService.$inject = ['$http', 'apiUrl'];

export default function pokemonService ($http, apiUrl) {

  return{
    get() {
      return $http
      .get(`${apiUrl}/pokemon`)
      .then(r => r.data);
    },
    add(image) {
      return $http
      .post(`${apiUrl}/pokemon`, image)
      .then(r => r.data);
    }
  };
}
