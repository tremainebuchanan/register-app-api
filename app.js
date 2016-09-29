(function(){
    'use strict';
    var express = require('express'),
        path = require('path'),
        logger = require('morgan'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser'),
        passport = require('passport'),
        session = require('express-session'),
        routes = require('./routes/index'),
        users = require('./routes/user/user'),
        students = require('./routes/student/routes.js'),
        sessions = require('./routes/session/routes.js'),
        admin = require('./routes/admin/routes.js'),
        instructor = require('./routes/instructor/routes'),
        organizations = require('./routes/organization/routes'),

        app = express(),
        env = process.env.NODE_ENV || 'development';

    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env == 'development';

    // view engine setup

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    // app.use(favicon(__dirname + '/public/img/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/', routes);
    app.use('/', users);
    app.use('/', students);
    app.use('/', sessions);
    app.use('/', admin);
    app.use('/', instructor);
  app.use('/', organizations);
    /// catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    /// error handlers

    // development error handler
    // will print stacktrace

    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err,
                title: 'error'
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {},
            title: 'error'
        });
    });

    module.exports = app;
})();


