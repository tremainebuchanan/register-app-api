(function () {
  angular
    .module('register', [
      'ngRoute',
      'nav',
      'dashboard',
      'instructor',
      'student',
      'api-service'
    ]).config(config);

  function config($routeProvider){
    $routeProvider.otherwise({redirectTo: '/registers'});
  }
})();

