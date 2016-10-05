(function(){
  var express = require('express'),
    api = require('./functions'),
    router = express.Router();

  router.post('/', api.organization.create);
  router.get('/organizations', api.organization.index);
  router.get('/organizations/:id', api.organization.show);

  module.exports = router;
})();
