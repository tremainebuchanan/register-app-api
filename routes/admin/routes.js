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
  router.post('/admin/subjects/:or_id/assign', api.subject.assign);
  router.get('/admin/subjects/assignments/:us_id', api.subject.all);

  router.post('/admin/instructors', api.instructor.create);
  router.get('/admin/instructors', api.instructor.index);
  router.get('/admin/instructors/:id', api.instructor.show);

  router.post('/admin/usertypes', api.usertype.create);
  router.get('/admin/usertypes', api.usertype.index);
  router.get('/admin/usertypes/:id', api.usertype.show);

  router.post('/admin/attendancetypes', api.attendancetype.create);
  router.get('/admin/attendancetypes', api.attendancetype.index);
  router.get('/admin/attendancetypes/:id', api.attendancetype.show);

  module.exports = router;
})();
