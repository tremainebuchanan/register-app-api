(function(){
  var model = require('../../models/db'),
      SessionType = model.SessionType;

  exports.sessiontype = {

     create: function(req, res){
       var sessiontype = new SessionType(req.body);
       sessiontype.save(function(err){
         if(!err) res.json('Session type with ' + sessiontype._id + ' created');
       });
     },

     index: function(req, res){
       SessionType.find().exec(function(err, sessiontypes){
         if(!err) res.json(sessiontypes);
       });
     },
     show : function(req, res){
       SessionType.findById(req.params.id).exec(function(err, sessiontype){
         if(!err) res.json(sessiontype);
       })
     }
  };
})();
