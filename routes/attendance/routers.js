(function(){
  var express = require('express'),
    api = require('./functions'),
    router = express.Router();

  // router.post('/attendance/:or_id', api.organization.create);
  // router.get('/organizations', api.organization.index);
  // router.get('/organizations/:id', api.organization.show);
  router.get('/attendance/re_id', api.attendance.show);

  module.exports = router;
})();
