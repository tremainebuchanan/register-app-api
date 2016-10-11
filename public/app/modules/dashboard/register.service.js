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
      getRegisters: getRegisters,
      getRegister: getRegister,
      getAttendance: getAttendance
    };

   function getRegisters(or_id) {
      return $http
              .get('/registers?or_id=' + or_id)
              .then(handleSuccess)
              .catch(handleError);

     function handleSuccess(response){
       return response.data;
     }
     function handleError(error){
       return error;
     }
    }

    function getRegister(id) {
      return $http
        .get('/registers/' + id)
        .then(handleSuccess)
        .catch(handleError);

      function handleSuccess(response){
        return response.data;
      }
      function handleError(error){
        return error;
      }
    }

    function getAttendance(re_id){
      return $http
        .get('/attendance/' + re_id)
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
