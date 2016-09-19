(function(){
  var express = require('express'),
      admin = require('./functions'),
      router = express.Router();

  router.post('/admin/sessiontypes', admin.sessiontype.create);
  router.get('/admin/sessiontypes', admin.sessiontype.index);
  router.get('/admin/sessiontypes/:id', admin.sessiontype.show);
  module.exports = router;
})();
