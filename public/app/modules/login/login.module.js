(function () {
  angular
    .module('login',[])
    .config(config);

  function config($routeProvider){
    $routeProvider
      .when('/login', {
        controller: 'Login',
        controllerAs: 'vm',
        templateUrl: '../app/modules/login/login.html'
      });
  }
})();
