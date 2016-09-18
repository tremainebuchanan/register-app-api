(function(){
  var express = require('express'),
      admin = require('./functions'),
      router = express.Router();

  router.post('/admin/sessiontypes', admin.sessiontype.create);
  router.get('/admin/sessiontypes', admin.sessiontype.index);
  router.get('/admin/sessiontypes/:id', admin.sessiontype.show);
  // router.post('/students', Student.create);
  // router.get('/students/:id', Student.show);
  // router.put('/students/:id', Student.update);

  module.exports = router;
})();
