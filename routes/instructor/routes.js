/**
 * Created by captain_kirk on 9/25/16.
 */
(function(){
  var express = require('express'),
    api = require('./functions'),
    router = express.Router();

  router.post('/instructors', api.instructor.create);
  router.get('/instructors/:or_id', api.instructor.index);
  router.get('/instructors/:or_id/:id', api.instructor.show);

  module.exports = router;
})();
