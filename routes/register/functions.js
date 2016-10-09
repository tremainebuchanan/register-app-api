(function(){
  var model = require('../../models/db'),
      Register = model.Register,
      Student = model.Student;

  exports.register = {
    /**
     * Creates a register from request body.
     * @param req
     * @param res
     */
    create: function(req, res){
      var register = new Register(req.body);
      register.re_mark_on.push("daily");
      register.save(function(err){
        if(!err) res.json('Created register with id ' + register.id);
      });
    },
    /**
     * Get all registers.
     * @param req
     * @param res
     */
    index: function(req, res){
      Register
        .find(req.query)
        .populate('students')
        .populate('su_id')
        .populate('re_assigned_to')
        .populate('or_id')
        .exec(function(err, registers){
          if(!err) res.json(registers);
        });
    },
    /**
     * Get a register by id.
     * @param req
     * @param res
     */
    show: function(req, res){
      Register
        .findById(req.params.id)
        .populate('students')
        .populate('su_id')
        .populate('re_assigned_to')
        .populate('or_id')
        .exec(function(err, register){
          if(!err) res.json(register);
        });
    },
    /**
     * Assigns a list of students to a register.
     * @param req
     * @param res
     */
    assignStudents: function(req, res){
      Register.findById(req.params.id, function(err, register){
        var len = req.body.students.length;
        var students = req.body.students;
        while(len--){
          register.students.push(students[len]);
        }
        register.save(function (err) {
          if(!err) res.json("Students added.");
        })
      });
    },
    assignAll: function(req, res){
      Register
        .findById(req.params.id)
        .exec(function(err, register){
         if(!err){
           Student
             .find({"or_id": req.params.or_id})
             .exec(function(err, students){
               if(!err){
                 var len = students.length, i = 0;
                 for(; i < len; i++){
                   register.students.push(students[i]);
                 }
                 register.save(function (err) {
                   if(!err) res.json("Students added.");
                 })
               }
           })
         }
      });

    },
    /**
     * Updates a register.
     * @param req
     * @param res
     */
    update : function (req, res) {
      Register.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, register){
        if (!err) {
          res.json({success: true, message: 'Register with id' + register.id + ' updated.'})
        }
      });
    }
  };

})();
