(function(){
	var express = require('express'),
		student = require('./functions'),
		router = express.Router();

	router.get('/students', student.index);
	router.post('/students', student.create);
	router.get('/students/:id', student.show);
	router.put('/students/:id', student.update);

	module.exports = router;
})();
