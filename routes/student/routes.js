(function(){
	var express = require('express'),
		api = require('./functions'),
		router = express.Router();

	router.get('/students', api.student.index);
	router.post('/students', api.student.create);
	router.get('/students/:id', api.student.show);
	router.put('/students/:id', api.student.update);

  router.get('/students/:id/attendance', api.student.getAttendance);
  router.post('/students/:id/attendance', api.student.postAttendance);

	module.exports = router;
})();
