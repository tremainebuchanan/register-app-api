(function(){
	var express = require('express'),
		api = require('./functions'),
		router = express.Router();

	router.get('/sessions', api.session.index);
	router.post('/sessions', api.session.create);
	router.get('/sessions/:id', api.session.show);
	router.put('/sessions/:id', api.session.update);

	module.exports = router;
})();
