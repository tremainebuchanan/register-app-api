(function(){
	var express = require('express'),
		session = require('./functions'),
		router = express.Router();

	router.get('/sessions', session.index);
	router.post('/sessions', session.create);
	router.get('/sessions/:id', session.show);
	router.put('/sessions/:id', session.update);

	module.exports = router;
})();
