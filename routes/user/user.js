(function(){
  var express = require('express'),
    router = express.Router(),
    model = require('../../models/db'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    flash = require('connect-flash'),
    User = model.User,
    Organization = model.Organization,
    custom_fields = {
      usernameField: 'email',
      passwordField: 'password'
    },
    auth_settings = {
      successRedirect: '/app/',
      failureRedirect: '/login'
    };

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

 passport.use(new LocalStrategy(custom_fields,
    function(email, password, done) {
      User
        .findOne({ us_email: email, us_password: password}, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect email/password.' });
        }
        return done(null, user);
      });
    }
  ));

  router.post('/login', function(req, res, next){
    passport.authenticate('local', function(err, user, info){

      if(err || !user) {
        return res.status(400).json({success: false});
      }

      req.logIn(user, function(err){
        return res.status(200).json({success: true, user: user});
      });

    })(req, res, next);
  });

  // router.post('/login', passport.authenticate('local'), function(req, res){
  //   if(res.json({success: true, user: req.user});
  // });

  router.post('/logout', function(req, res){
    req.logout();
    res.sendStatus(200);
  });

  router.get('/loggedin', function(req, res){
    res.send(req.isAuthenticated() ? req.user : 'not authenticated');
  });

  router.post('/users', function(req, res) {
    var user = new User(req.body);
    user.save(function(err){
      if(!err) res.json('User created with id ' + user.id);
    })
  });


  router.get('/users', function(req, res) {
    User
      .find()
      .populate('or_id')
      .populate('us_type_id')
      .exec(function(err, users){
        if(!err) res.json(users);
      });
  });

  router.get('/users/:id', function(req, res) {
    User
      .findById(req.params.id)
      .exec(function(err, user){
        if(!err) res.json(user);
      });
  });

  router.post('/register', function(req, res){
    //console.log(req.body);
    //res.end()
    var organization = new Organization({
        or_name: req.body.or_name
    });

    var user = new User(req.body);

    organization.us_id = user.id;
    user.or_id = organization.id;

    user.save(function(err){
        if(!err){
          organization.save(function(err){
            if(!err)
              //send email
              //res.redirect('/login');
              res.json('Organization and user created');
          });
        }
      });
  });

  router.get('/organizations', function(req, res){
    Organization
      .find()
      .populate('us_id')
      .exec(function(err, orgs){
        if(!err) res.json(orgs);
      });
  });

  router.post('/users/:or_id', function(req, res){
    var user = new User(req.body);
    user.or_id = req.params.or_id;
    user.save(function(err){
      if(!err) res.json('User created for organization ' + req.params.or_id);
    });
  });

  router.get('/users/:or_id/organizations', function(req, res){
      User
        .find({or_id: req.params.or_id})
        .populate('us_type_id')
        .exec(function(err, users){
        if(!err || !users) res.json(users);
      })
  });

  module.exports = router;
})();

