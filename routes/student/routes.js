(function(){
	var express = require('express'),
		Student = require('./functions')
		router = express.Router();

	router.get('/students', Student.index);
	router.post('/students', Student.create);
	router.get('/students/:id', Student.show);
	router.put('/students/:id', Student.update);

	module.exports = router;
})();