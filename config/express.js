var express = require('express');
var config = require('./config');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function() {
  var app = express(); 
  //add created session middleware for all requests 
///////middleware////////////////////
  //app.use(flash()); // session object used to store temporary messages


    if (process.env.NODE_ENV === 'development') {
       app.use(morgan('dev'));
     } else if (process.env.NODE_ENV === 'production') {
       app.use(compress());
    }
     app.use(bodyParser.urlencoded({
       extended: true
     }));
     app.use(bodyParser.json());
     app.use(methodOverride());

  app.use(passport.initialize());
  app.use(passport.session());
  
  //the app root environment is server.js , 
  //considering the ./app/view is a runtime address
  app.set('views', './app/views'); // place to look when render() is called
  app.set('view engine', 'ejs');    //engine to render

  require('../app/routes/users.server.routes.js')(app);
  
  //bootstrap route
  require('../app/routes/index.server.routes.js')(app); 
  require('../app/routes/callCenter.server.routes.js')(app); 
  
  app.use(express.static('./public')); //define static file folder  , used at last , otherwise http requests will 
                      //go through this middleware
  return app;


};