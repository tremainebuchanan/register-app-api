(function(){
	var model = require('../../models/db'),
     Session = model.Session,
     Student = model.Student,
    SessionType = model.SessionType,
    moment = require('moment');

	exports.session = {
    create : function(req, res){
      var session = new Session(req.body);
      //session.se_start_time = moment(req.body.hr, "HH");
      session.save(function(err){
        if(!err) res.json("Session with id " + session.id + " created.");
      });
    },
    index: function(req, res){
      Session
        .find()
        .exec(function(err, result){
          res.json({"sessions": result});
        });
    },show : function(req, res){
      Session
        .findById(req.params.id)
        // .populate('st_students')
        // .populate('se_type_id')
        .exec(function (err, session) {
          if(!err) res.json(session);
        });
    }, update : function(req, res){
      Session.findById(req.params.id, function(err, session){
        var students = req.body.students,
          len = students.length,
          i = 0;
        for(; i < len; i++){
          session.st_students.push(students[0]);
        }
        session.save(function(err, updatedSession){
          if(!err) res.json('Session updated');
        });
      });
    }
  };







})();
