(function(){
  var model = require('../../models/db'),
      SessionType = model.SessionType,
      Location = model.Location,
      Instructor = model.Instructor,
      Subject = model.Subject;

  // exports.sessiontype = {
  //
  //    create: function(req, res){
  //      var sessiontype = new SessionType(req.body);
  //      sessiontype.save(function(err){
  //        if(!err) res.json('Session type with ' + sessiontype._id + ' created');
  //      });
  //    },
  //
  //    index: function(req, res){
  //      SessionType.find().exec(function(err, sessiontypes){
  //        if(!err) res.json(sessiontypes);
  //      });
  //    },
  //    show : function(req, res){
  //      SessionType.findById(req.params.id).exec(function(err, sessiontype){
  //        if(!err) res.json(sessiontype);
  //      })
  //    }
  // };

  exports.location = {
    create: function(req, res){
      var location = new Location(req.body);
      location.save(function(err){
        if(!err) res.json('Created location with id ' + location.id);
      });
    },
    index: function(req, res){
      Location
        .find()
        .exec(function(err, locations){
          if(!err) res.json(locations);
        });
    },
    show: function(req, res){
      Location
        .findById(req.params.id)
        .exec(function(err, location){
          if(!err) res.json(location);
        });
    }
  };

  exports.instructor = {
    create: function(req, res){
      var instructor = new Instructor(req.body);
      instructor.save(function(err){
        if(!err) res.json('Instructor created with id ' + instructor.id);
      });
    },
    index: function(req, res){
      Instructor
        .find()
        .exec(function(err, instructors){
          if(!err) res.json(instructors);
        });
    },
    show: function(req, res){
      Instructor
        .findById(req.params.id)
        .exec(function(err, instructor){
          if(!err) res.json(instructor);
        });
    }
  };

  exports.subject = {
    create: function(req, res){
      var subject = new Subject(req.body);
      subject.save(function(err){
        if(!err) res.json('Subject created with id ' + subject.id);
      });
    },
    index: function(req, res){
      Subject
        .find()
        .exec(function(err, subject){
          if(!err) res.json(subject);
        });
    },
    show: function(req, res){
      Subject
        .findById(req.params.id)
        .exec(function(err, subject){
          if(!err) res.json(subject);
        });
    }
  };

})();
