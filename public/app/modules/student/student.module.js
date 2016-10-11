/**
 * Created by captain_kirk on 10/10/16.
 */
(function(){
  angular
    .module('student',[])
    .config(config);

  function config($routeProvider){
    $routeProvider
      .when('/students', {
        controller: 'Student',
        controllerAs: 'vm',
        templateUrl: '../app/modules/student/student.html'
      });
  }
})();
