(function(){
  var express = require('express'),
    api = require('./functions'),
    router = express.Router();

  router.post('/registers', api.register.create);
  router.get('/registers', api.register.index);
  router.get('/registers/:id', api.register.show);
  router.put('/registers/:id', api.register.update);
  router.put('/registers/:id/students', api.register.assignStudents);

  module.exports = router;
})();
