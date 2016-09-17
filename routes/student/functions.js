(function(){
	var student_model = require('../../models/Student');

	exports.index = function(req, res){
		res.json('all students');
	}

	exports.show = function(req, res){
		res.json('show student');
	}

	exports.create = function(req, res){
		res.json('create a student');
	}

	exports.update = function(req, res){
		res.json('update a student');
	}
})();