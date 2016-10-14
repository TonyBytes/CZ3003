//set software mode by default to be development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

//load mongoDB models into the system first before anyother files are loaded
var db=mongoose();
var app = express(); //construct express
var passport= passport();

app.listen(3000);
//app.use(authentication)
module.exports = app;
console.log('Server running at http://localhost:3000/');