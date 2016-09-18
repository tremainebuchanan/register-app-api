(function(){
	var model = require('../../models/db'),
     Session = model.Session,
     Student = model.Student;

	exports.index = function(req, res){
	   Session
       .find()
       .populate('st_students')
       .populate('se_type_id')
       .exec(function(err, result){
	      res.json({"sessions": result});
     });
	};

	exports.create = function(req, res){
	  var students = [],
       session = new Session(req.body);

    Student.find().exec(function(err, students){
      if(!err){
        session.st_students = students;
        session.save(function(err){
          if(!err) res.json({"response" : {"message": 'Created session with id ' + session.id, "status": "Ok"}});
          });
      }
    });
	};

	exports.show = function(req, res){
	  Session
      .findById(req.params.id)
      .exec(function (err, session) {
        res.json(session);
      });
  };

})();
