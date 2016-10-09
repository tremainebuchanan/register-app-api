(function(){
  var express = require('express'),
    api = require('./functions'),
    router = express.Router();

  router.post('/registers', api.register.create);
  router.get('/registers', api.register.index);
  router.get('/registers/:id', api.register.show);
  router.put('/registers/:id', api.register.update);
  router.put('/registers/:id/students', api.register.assignStudents);//
  router.put('/registers/:id/assign/:or_id', api.register.assignAll);
  module.exports = router;
})();
