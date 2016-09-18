(function(){
	var model = require('../../models/db'),
      Student = model.Student;

	exports.index = function(req, res){
		Student.find().exec(function(err, students){
      if(!err) res.json({"students": students});
    });
	};

	exports.show = function(req, res){
		Student.findById(req.params.id).exec(function(err, student){
		   if(!err) res.json(student);
    });
	};

	exports.create = function(req, res){
		var student = new Student(req.body);
    student.save(function(err){
      if(!err) res.json("Student with id " + student.id + " created");
    })
	};

	exports.update = function(req, res){
		res.json('update a student');
	}
})();
