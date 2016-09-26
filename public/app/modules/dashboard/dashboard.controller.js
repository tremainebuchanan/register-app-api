/**
 * Created by captain_kirk on 9/25/16.
 */
(function () {
  angular
    .module('dashboard')
    .controller('Dashboard', Dashboard);

  Dashboard.$inject = ['apiService'];

  function Dashboard(apiService){
    var vm = this;
    vm.create = createRegister;
    vm.register = {
      session: ""
    };

    getInstructors();
    vm.classes = getClasses();

    function createRegister(){
        console.log(vm.register);
    }

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

    function getClasses(){
      return [{"id" : 1, "title": "Fundamentals of Accounts"}];
    }

  }
})();
