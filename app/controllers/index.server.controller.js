//render function in node framework?
exports.render = function(req, res) {
  if (req.session.lastVisit) {
       console.log(req.session.lastVisit);
  }
    req.session.lastVisit = new Date(); 
    res.render('index',{
      lastvisit: req.session.lastVisit 
    });
};