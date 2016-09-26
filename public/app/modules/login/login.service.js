(function () {
  angular
    .module('login')
    .service('loginService', loginService);

  loginService.$inject = ['$http'];

  function loginService($http){
    var api_url = {
        login: '/login',
        logout: '/logout'
      },
        service = {
          authUser: authUser
        };


    function authUser(email, password) {
      var user = {
        email: email,
        password: password
      };
      return $http
        .post(api_url.login, user)
        .then(handleSuccess)
        .catch(handleError);
      function handleSuccess(response){
        return response.data;
      }
      function handleError(error){
        return error;
      }
    }

    return service;
  }
})();
