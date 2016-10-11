/**
 * Created by captain_kirk on 9/25/16.
 */
(function () {
  angular
    .module('dashboard')
    .controller('Dashboard', Dashboard);

  Dashboard.$inject = ['$routeParams', '$location','registerService'];

  function Dashboard($routeParams, $location, registerService){
    var vm = this;
    vm.create = createRegister;
    vm.getAttendance = getAttendance;
    vm.register = {
      session: ""
    };

    if($routeParams.id){
      registerService
        .getAttendance($routeParams.id)
        .then(function(attendance){
          vm.attendance = attendance;
          console.log(attendance.length);
        }).catch(function(error){
          vm.register = {};
      })
    }

    getRegisters("57fad5c1326ccf00035f6a4e");
    vm.classes = getClasses();

    function createRegister(){
        console.log(vm.register);
    }

    function getRegisters (or_id) {
      registerService.getRegisters(or_id).then(function(registers){
        vm.registers = registers;
        console.log(registers);
      }).catch(function(error){
        console.log('Error occured in getting registers')
      })
    }

    function getAttendance(register){
      $location.path('/registers/' + register.id);
    }

    function getClasses(){
      return [{"id" : 1, "title": "Fundamentals of Accounts"}];
    }

  }
})();
