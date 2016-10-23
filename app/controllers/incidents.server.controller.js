var Incident = require('mongoose').model('Incident');
exports.create = function(req, res, next) {    
     var incident = new Incident(req.body); 
      incident.save(function(err) {  //callback
       if (err) {
         return next(err);
       } else {
        console.log("document created:"+incident);
        res.json(incident);
       }
	}); 
};
//find ({query} , fields to return, callback) 
//callback function will have results of the query as parameters
exports.list = function(req, res, next) {
     Incident.find({}, function(err, incidents) {
       if (err) {   
         return next(err);
       } else {
         res.json(incidents);
		} 
	});
};

//make sure the userByID function are executed before CRUD opeations
exports.incidentByID = function(req, res, next, id) {
      
      Incident.findById(id).exec(function(err, incident) {
        if (err) return next(err);
        if (!incident) 
          return next(new Error('Failed to load incident '+ id));
       req.incident = incident;
       console.log("Incident fetched " + incident);
       next();
      });  
};





exports.read = function(req, res) {
     console.log("Incident fetched " + req.incident);     
     res.json(req.incident);

};


//findByIdAndUpdate(index to search, content to update, callback)
//register under PUT request
exports.update = function(req, res, next) {
  Incident.findByIdAndUpdate(req.incident.id, req.body, function(err, incident) {
    if (err) {
         return next(err);
       } else {
        console.log('incident edited:' + incident);
         res.json(incident);
    } 
  });
};

//register under DELETE request
exports.delete = function(req, res, next) {
     req.incident.remove(function(err) {
       if (err) {
         return next(err);
      } else {
         res.json(req.incident);
      } 
    })
};



