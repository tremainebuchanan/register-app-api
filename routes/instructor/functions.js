(function(){
  var model = require('../../models/db'),
      Instructor = model.Instructor;

  exports.instructor = {
    index : function(req, res) {
      Instructor
        .find()
        .populate('or_id')
        .exec(function (err, instructors) {
        if (!err) res.json(instructors);
      });
    },

    show : function(req, res){
      Instructor
        .findById(req.params.id)
        .populate('or_id')
        .exec(function(err, instructor){
        if(!err) res.json(instructor);
      });
    },

    create : function(req, res){
      var instructor = new Instructor(req.body);
      instructor.save(function(err){
        if(!err) res.json("Instructor with id " + instructor.id + " created");
      })
    },

    update : function(req, res){
      res.json('update a student');
    }
  };
})();
