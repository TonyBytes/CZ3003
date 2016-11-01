var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');
   module.exports = function(app) {
    app.route('/signup').post(users.create).get(users.list);  //callback
	app.route('/signin')
        .post(passport.authenticate('local', {
          successRedirect: '/signInResult',
          failureRedirect: '/signInResult',
          failureFlash: true
		}));
	 app.route('/signInResult').get(users.categorize); 
};
