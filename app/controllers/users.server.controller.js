var User = require('mongoose').model('User');
exports.create = function(req, res, next) {    
  if (req.session.lastVisit) {
       console.log(req.session.lastVisit);
  }
    req.session.lastVisit = new Date(); 
     var user = new User(req.body); 
     user.save(function(err) {  //callback
       if (err) {
         return next(err);
       } else {
         res.json(user);
       }
	}); 
};
//find ({query} , fields to return, callback) 
//callback function will have results of the query as parameters
exports.list = function(req, res, next) {
     User.find({}, function(err, users) {
       if (err) {   
         return next(err);
       } else {
         res.json(users);
		} 
	});
};

//make sure the userByID function are executed before CRUD opeations
exports.userByID = function(req, res, next, id) {
     User.findOne({
       _id: id
     }, function(err, user) {
       if (err) {
         return next(err);
       } else {
         req.user = user;
         next();
} });
};


exports.read = function(req, res) {
     res.json(req.user);
};


//findByIdAndUpdate(index to search, content to update, callback)
//register under PUT request
exports.update = function(req, res, next) {
  User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
    if (err) {
         return next(err);
       } else {
         res.json(user);
    } 
  });
};

//register under DELETE request
exports.delete = function(req, res, next) {
     req.user.remove(function(err) {
       if (err) {
         return next(err);
      } else {
         res.json(req.user);
      } 
    })
};

exports.render = function(req, res) {
  if (req.session.lastVisit) {
       console.log(req.session.lastVisit);
  }
    req.session.lastVisit = new Date(); 
    res.render('index',{
      lastvisit: req.session.lastVisit 
    });
};

