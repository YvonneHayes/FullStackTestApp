configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
// const view = ['$stateParams', sP => {
//   return sP.view;
// }];

export default function configRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<p>This is the Welcome Page.</p>'
    });

    // .state('pokemons', {
    //   url: '/pokemon',
    //   params: {
    //     view: {
    //       dynamic: true
    //     }
    //   },
    //   resolve: {
    //     view
    //   },
    //   component: 'tile'
    // });
  $urlRouterProvider.otherwise('/');
}
