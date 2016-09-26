/**
 * Created by captain_kirk on 9/25/16.
 */
(function () {
  angular
    .module('instructor')
    .controller('Instructor', Instructor);

  Instructor.$inject = ['apiService'];

  function Instructor(apiService) {
    var vm = this;

    getInstructors();

    function getInstructors(){
      var user = JSON.parse(sessionStorage.getItem('user'));
      if(user){
        apiService
          .getInstructorsByOrgId(user.or_id)
          .then(function(instructors){
            vm.instructors = instructors;
          });
      }
    }
  }
})();
