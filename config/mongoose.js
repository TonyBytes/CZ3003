var config = require('./config'),
  mongoose = require('mongoose');
module.exports = function() {
    var db = mongoose.connect(config.db);
    //execute the code in user model and add user model into 
    require('../app/models/user.server.model'); 
    require('../app/models/incident.server.model'); 
    return db; 
};