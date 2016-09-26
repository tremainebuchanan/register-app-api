(function () {
  angular
    .module('api-service',[])
    .service('apiService', apiService);

  apiService.$inject = ['$http'];

  function apiService($http){
    var urls = {
      user: "/users",
      logout: "/logout",
      instructors: '/instructors'
    };

    var service = {
        authUser: authUser,
        getInstructorsByOrgId: getInstructorsByOrgId,
        logOut: logOut
    };

    function getInstructorsByOrgId(id){
      return $http
              .get(urls.instructors + '/' + id)
              .then(handleSuccess)
              .catch(handleError);

        function handleSuccess(response){
          return response.data;
        }
        function handleError(error){
          return error;
        }
    }

    function authUser(user){
     return $http
        .post(urls.user, user)
        .then(handleSuccess)
        .catch(handleError);
      function handleSuccess(response){
        return response.data;
      }
      function handleError(error){
        return error;
      }
    }

    function logOut(){
      return $http
        .post(urls.logout)
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
