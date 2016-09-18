(function(){
	var student_model = require('../../models/Student');

	exports.index = function(req, res){
		var students = [{
			first_name: "Tremaine",
			last_name: "Buchanan",
			gender: "Male"
		},{
			first_name: "Monique",
			last_name: "King",
			gender: "female"
		},{
			first_name: "George",
			last_name: "Bush",
			gender: "male"
		}];

		res.json({"students": students});
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