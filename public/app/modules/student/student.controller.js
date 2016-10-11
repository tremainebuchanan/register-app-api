/**
 * Created by captain_kirk on 10/10/16.
 */
(function(){
  angular
    .module('student')
    .controller('Student', Student);

  Student.$inject = ['$http'];

  function Student($http){
      var vm = this;

    $http
      .get('/students?or_id=57fad5c1326ccf00035f6a4e')
      .then(function(students){
        vm.students = students.data.students;
      });
  }
})();
