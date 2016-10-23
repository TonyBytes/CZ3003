var mongoose = require('mongoose'), Schema = mongoose.Schema;

var taskSchema = new Schema({
  priority: String,
  sms: String,
  status: {
    type:String,
    default:"incomplete"},
  delegate: String
});

var IncidentSchema = new Schema({
  name: String,
  type: String,
  victimName: String,
  victimContactNumber: String,
  lat:String,
  longtitude:String,
  creator:String,
  status: {
    type:String,
    default:"incomplete"},
  tasks:[taskSchema],
  created: {
      type: Date,
       default: Date.now
  }
});

mongoose.model('Incident',IncidentSchema);

