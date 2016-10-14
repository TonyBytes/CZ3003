var users = require('../../app/controllers/users.server.controller');
   module.exports = function(app) {
     app.route('/').post(users.create).get(users.render);  //callback
};