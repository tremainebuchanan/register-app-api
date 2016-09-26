/**
 * Created by captain_kirk on 9/25/16.
 */
(function () {
  angular
    .module('instructor',[])
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/instructors',{
        controller: 'Instructor',
        controllerAs: 'vm',
        templateUrl: '../app/modules/instructor/instructor.html'
      });
  }
})();
