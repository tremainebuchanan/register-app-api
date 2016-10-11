(function(){
	var express = require('express'),
		api = require('./functions'),
		router = express.Router();

	router.get('/students', api.student.index);
	router.post('/students', api.student.create);
  router.post('/students/bulk', api.student.createBulk);
	router.get('/students/:id', api.student.show);
	router.put('/students/:id', api.student.update);
  router.put('/students/:or_id/bulk', api.student.bulk);

  router.get('/attendance/:re_id', api.student.getAttendanceByRegister);
  router.get('/students/:or_id/attendance', api.student.getAttendance);
  //router.get('/students/:re_id/attendance/t', api.student.getAttendanceByRegister);
  router.get('/students/:or_id/attendance/:st_id', api.student.getAttendanceById);
  //router.put('/students/:or_id/attendance/:st_id', api.student.updateAttendance);
  router.post('/students/:or_id/attendance', api.student.postAttendance);
  //router.post('/students/:or_id/attendance/bulk', api.student.bulk);

	module.exports = router;
})();
