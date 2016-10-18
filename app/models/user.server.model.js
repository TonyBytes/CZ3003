var mongoose = require('mongoose'), Schema = mongoose.Schema;
var crypto = require('crypto');
var UserSchema = new Schema({

     email: String,
     username: {
     	type: String,
     	trim: true,
     	unique: true
     },
     password: String,
     accountType: String,
     hp: String,
     salt: String
   });


//security layer
     //middleware
     UserSchema.pre('save', function(next) {
       if (this.password) {
         this.salt = new
           Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
         this.password = this.hashPassword(this.password);
       }
     next(); });

     //hash
     UserSchema.methods.hashPassword = function(password) {
       return crypto.pbkdf2Sync(password, this.salt, 10000,
         64).toString('base64');
     };

     //authenticate
     UserSchema.methods.authenticate = function(password) {
          return this.password === password;
     };


mongoose.model('User' , UserSchema);



