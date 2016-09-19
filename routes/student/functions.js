(function(){
	var model = require('../../models/db'),
      Student = model.Student,
      Attendnace = model.Attendance;

  exports.student = {
    index : function(req, res) {
      Student.find().exec(function (err, students) {
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

    update : function(req, res){
      res.json('update a student');
    },

    getAttendance : function(req, res){
      Attendnace
          .find({"st_student_id": req.params.id})
          .exec(function (err, attendance) {
            if(!err) res.json({"attendance" : attendance});
          });
    },

    getAttendanceById : function(req, res){
      Attendnace
        .findById(req.params.id)
        .exec(function (err, attendance) {
          if(!err) res.json(attendance);
        });
    },

    postAttendance : function(req, res){
      var attendance = new Attendnace(req.body);
      attendance.at_created = Date.now();
      attendance.save(function(err){
        if(!err) res.json("Attendance record with id " + attendance.id + " created");
      });
    },

    updateAttendance : function(req, res){
      Attendnace
        .findByIdAndUpdate(req.params.id, {$set: {at_status: req.body.status}}, function(err, attendance){
          if(!err) res.json("Attendance updated");
        });
    }
  };
})();
