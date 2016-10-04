(function(){
  var model = require('../../models/db'),
      SessionType = model.SessionType,
      Location = model.Location,
      Instructor = model.Instructor,
      Subject = model.Subject,
      UserType = model.UserType,
      Assignment = model.Assignment;

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
        .exec(function(err, subjects){
          if(!err) res.json(subjects);
        });
    },
    show: function(req, res){
      Subject
        .findById(req.params.id)
        .exec(function(err, subject){
          if(!err) res.json(subject);
        });
    },
    assign: function(req, res){
      var assignment = new Assignment(req.body);
      assignment.or_id = req.params.or_id;
      assignment.save(function(err){
        if(!err) res.json("Assignment completed");
      });
    },
    all: function(req, res){
      Assignment
        .find({us_id: req.params.us_id})
        .populate('subjects')
        .exec(function(err, assignments){
          if(!err) res.json(assignments);
        })
    }
  };

  exports.usertype = {
    create: function(req, res){
      var usertype = new UserType(req.body);
      usertype.save(function(err){
        if(!err) res.json('User Type created with id ' + usertype.id);
      });
    },
    index: function(req, res){
      UserType
        .find()
        .exec(function(err, usertype){
          if(!err) res.json(usertype);
        });
    },
    show: function(req, res){
      UserType
        .findById(req.params.id)
        .exec(function(err, usertype){
          if(!err) res.json(usertype);
        });
    }
  };

})();
