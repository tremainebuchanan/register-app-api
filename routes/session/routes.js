(function(){
	var express = require('express'),
		Session = require('./functions')
		router = express.Router();

	router.get('/sessions', Session.index);
	// router.post('/students', Student.create);
	// router.get('/students/:id', Student.show);
	// router.put('/students/:id', Student.update);

	module.exports = router;
})();