var express = require('express');
var config = require('./config');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');


module.exports = function() {
  var app = express(); 
  //add created session middleware for all requests 
  
  app.use(session({
       saveUninitialized: true,
       resave: true,
       secret: config.sessionSecret
	})
  );
  


  app.use(flash()); // session object used to store temporary messages
  app.use(passport.initialize());
  app.use(passport.session());
  //the app root environment is server.js , 
  //considering the ./app/view is a runtime address
  app.set('views', './app/views'); // place to look when render() is called
  app.set('view engine', 'ejs');    //engine to render

  require('../app/routes/users.server.routes.js')(app);
  //require('../app/routes/index.server.routes.js')(app); //
  
  app.use(express.static('./public')); //define static file folder 
  return app;


};