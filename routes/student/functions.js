(function(){
	var model = require('../../models/db'),
      Student = model.Student,
      Attendance = model.Attendance,
      Register = model.Register;

  exports.student = {
    index : function(req, res) {
      Student
        .find(req.query)
        .populate('or_id')
        .sort('st_last_name')
        .exec(function (err, students) {
        if (!err) res.json({"students": students});
      });
    },

    show : function(req, res){
      Student.findById(req.params.id).exec(function(err, student){
        if(!err) res.json(student);
      });
    },

    create : function(req, res){
      var student = new Student(req.body);
      student.save(function(err){
        if(!err) res.json("Student with id " + student.id + " created");
      })
    },

    createBulk : function(req, res){
      Student.create(req.body, function(err){
          if(!err) return res.json("Created");
        });
    },

    update : function(req, res){
      res.json('update a student');
    },

    getAttendance : function(req, res){
      Attendance
          .find({or_id: req.params.or_id})
          .populate('st_id')
          .populate('at_type_id')
          .populate('su_id')
          .exec(function (err, attendance) {
            if(!err) res.json(attendance);
          });
    },

    getAttendanceById : function(req, res){
      Attendance
        .findById(req.params.id)
        .populate('st_id')
        .populate('at_type_id')
        .populate('su_id')
        .exec(function (err, attendance) {
          if(!err) res.json(attendance);
        });
    },

    getAttendanceByRegister : function(req, res){
      Attendance
        .find({re_id: req.params.re_id})
        .populate('st_id')
        .populate('at_type_id')
        .populate('su_id')
        .sort('st_last_name')
        .exec(function (err, attendance) {
          if(!err) res.json(attendance);
        });
    },
    //TODO update register field marked when attendance is taken
    postAttendance : function(req, res){
      Attendance.create(req.body, function (err) {
        var message = 'success';
        if(err) message = 'error';
        Register.findOne({or_id: req.params.or_id}, function(err, register){
           register.re_last_marked = Date.now();
           register.save(function(err){
              if(!err) return res.json({"message": "success"})
           });
        });
        return res.json({"message": message});
      });
    },

    updateAttendance : function(req, res){
      Attendance
        .findByIdAndUpdate(req.params.id, {$set: {at_status: req.body.status}}, function(err, attendance){
          if(!err) res.json("Attendance updated");
        });
    },
    bulk: function(req, res){
      Attendance.create(req.body, function (err) {
          var message = 'success';
          if(err) message = 'error';

          res.json(message);
        });
    }
  };
})();
