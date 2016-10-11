/**
 * Created by captain_kirk on 9/25/16.
 */
(function () {
  angular
    .module('nav')
    .controller('Nav', Nav);

  Nav.$inject = ['$location','apiService'];

  function Nav($location, apiService){
    var vm = this;

    vm.logout = logout;

    vm.user = getUser();
    vm.setActive = setActive;

    function logout(){
      apiService
        .logOut()
        .then(function(response){
          clearSession();
          window.location = '/login';
        }).catch(function(err){

      });
    }

    function clearSession(){
      sessionStorage.removeItem('user');
    }

    function getUser(){
      return JSON.parse(sessionStorage.getItem('user'));
    }

    function setActive(path){
      return ($location.path().substr(0, path.length) === path);
    }
  }
})();
