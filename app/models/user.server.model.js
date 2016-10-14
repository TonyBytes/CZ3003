var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UserSchema = new Schema({
     firstName: String,
     lastName: String,
     email: String,
     username: {
     	type: String,
     	trim: true,
     	unique: true
     },
     password: String
   });


UserSchema.methods.authenticate = function(password) {
     return this.password === password;
};


mongoose.model('User' , UserSchema);

