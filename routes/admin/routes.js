(function(){
  var express = require('express'),
      api = require('./functions'),
      router = express.Router();

  // router.post('/admin/sessiontypes', admin.sessiontype.create);
  // router.get('/admin/sessiontypes', admin.sessiontype.index);
  // router.get('/admin/sessiontypes/:id', admin.sessiontype.show);

  router.post('/admin/locations', api.location.create);
  router.get('/admin/locations', api.location.index);
  router.get('/admin/locations/:id', api.location.show);

  router.post('/admin/subjects', api.subject.create);
  router.get('/admin/subjects', api.subject.index);
  router.get('/admin/subjects/:id', api.subject.show);

  router.post('/admin/instructors', api.instructor.create);
  router.get('/admin/instructors', api.instructor.index);
  router.get('/admin/instructors/:id', api.instructor.show);
  module.exports = router;
})();
