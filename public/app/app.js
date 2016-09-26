(function () {
  angular
    .module('register', [
      'ngRoute',
      'nav',
      'dashboard',
      'instructor',
      'api-service'
    ]).config(config);

  function config($routeProvider){
    $routeProvider.otherwise({redirectTo: '/registers'});
  }
})();

