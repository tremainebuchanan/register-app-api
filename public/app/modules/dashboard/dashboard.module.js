/**
 * Created by captain_kirk on 9/25/16.
 */
(function () {
  angular
    .module('dashboard',[])
    .config(config);

  function config($routeProvider){
    $routeProvider
      .when('/registers',{
        controller: 'Dashboard',
        controllerAs: 'vm',
        templateUrl: '../app/modules/dashboard/dashboard.html'
      }).when('/registers/new',{
        controller: 'Dashboard',
        controllerAs: 'vm',
        templateUrl: '../app/modules/dashboard/create-register.html'
    }).when('/registers/:id',{
      controller: 'Dashboard',
      controllerAs: 'vm',
      templateUrl: '../app/modules/dashboard/attendance.html'
    });
  }
})();
