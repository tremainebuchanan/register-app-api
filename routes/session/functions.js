(function(){
	var model = require('../../models/db'),
     Session = model.Session,
     Student = model.Student,
    SessionType = model.SessionType;

	exports.index = function(req, res){
	   Session
       .find()
       .populate('st_students')
       .populate('se_type_id')
       .sort("-se_created")
       .exec(function(err, result){
	      res.json({"sessions": result});
     });
	};

	exports.create = function(req, res){
	  var session = new Session();
    var session_type = req.body.session_type.toLowerCase();
    session.se_created = Date.now();
    SessionType
        .findOne({"se_type_name" : session_type })
        .exec(function(err, type){
          if(!err) {
            session.se_type_id = type.id;
            Student.find().exec(function(err, students){
              if(!err){
                session.st_students = students;
                session.save(function(err){
                  if(!err) res.json({"response" : {"message": 'Created session with id ' + session.id, "status": "Ok"}});
                });
              }
            });
          }
    });
	};

	exports.show = function(req, res){
	  Session
      .findById(req.params.id)
      .populate('st_students')
      .populate('se_type_id')
      .exec(function (err, session) {
        if(!err) res.json(session);
      });
  };

})();
