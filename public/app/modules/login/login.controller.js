(function () {
  angular
    .module('login')
    .controller('Login', Login);

  Login.$inject = ['$location','loginService'];

  function Login($location, loginService){
    var vm = this;
      vm.email = "";
      vm.password = "";

    vm.processForm = processForm;

    function processForm(){
      loginService
        .authUser(vm.email, vm.password)
        .then(function(response){
          if(response.success){
            console.log(response);
            //set session storage with user details
            //redirect to dashboard
            //$location.path('#/dashboard');
          }
        }).catch(function(error){
          console.log('In error login controller');
      });
    }
  }
})();
