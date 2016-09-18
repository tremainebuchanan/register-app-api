(function(){
	var model = require('../../models/db'),
     Session = model.Session;

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
       len = req.body.students.length,
       session = new Session(req.body);

    for(var i=0; i<len; i++){
       students.push(req.body.students[i]);
    }

    session.st_students = students;
    session.save(function(err){
      if(!err) res.json('Created session with id ' + session.id);
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
