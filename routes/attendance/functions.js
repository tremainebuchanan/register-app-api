(function(){
  var model = require('../../models/db'),
    Attendance = model.Attendance;

  exports.attendance = {
    show: function(req, res){
      Attendance
        .find({re_id: req.params.re_id})
        .exec(function(err, attendance){
          if(!err) return res.json(attendance);
        });
    }
  }
})();

