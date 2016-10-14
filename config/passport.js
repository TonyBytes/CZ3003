var passport = require('passport'),
       mongoose = require('mongoose');
module.exports = function() {
    var User = mongoose.model('User');
    //store session
    passport.serializeUser(function(user, done) {
       done(null, user.id);
       //user.id is saved in the session
    });

    //restrieve session
    passport.deserializeUser(function(id, done) {
       User.findOne({
         _id: id
       }, '-password -salt', function(err, user) {
         done(err, user); //attach the user object to the req 
       });
    });
    require('./strategies/local.js')();
};