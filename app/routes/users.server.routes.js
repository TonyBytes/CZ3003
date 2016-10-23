var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');
   module.exports = function(app) {
     app.route('/signup').post(users.create).get(users.list);  //callback
	 app.route('/signin')
        .post(passport.authenticate('local', {
          successRedirect: '/signInSuccess',
          failureRedirect: '/signin',
          failureFlash: true
		}));
	 app.route('/signInSuccess').get(users.categorize);
};
