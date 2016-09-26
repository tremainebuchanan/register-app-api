var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/app/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res){
  res.render('login');
});

router.get('/register', function(req, res){
  res.render('register');
});

router.get('/', function(req, res){
  res.redirect('/login');
});

module.exports = router;
