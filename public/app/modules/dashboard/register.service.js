/**
 * Created by captain_kirk on 9/25/16.
 */
(function () {
    angular
      .module('dashboard')
      .service('registerService', registerService);

  registerService.$inject = ['$http'];

  function registerService($http){
    var service = {
      getRegistersByOrgId: getRegistersByOrgId
    };

   function getRegistersByOrgId(org_id) {
      return $http
              .get('/instructors/' + org_id)
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
