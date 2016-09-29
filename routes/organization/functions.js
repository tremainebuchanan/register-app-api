(function () {
  var model = require('../../models/db'),
      Organization = model.Organization;

  exports.organization = {
    index: function(req, res){
      Organization
        .find()
        .exec(function(err, orgs){
          if(!err) res.json(orgs);
        });
    },
    show: function(req, res){
      Organization.findById(req.params.id).exec(function(err, org){
        if(!err) res.json(org);
      });
    },
    create: function(req, res){
      var org = new Organization(req.body);
      org.save(function(err){
        if(!err) res.json('Organization with id ' + org.id + ' created');
      });
    }
  };
})();
