//render function in node framework?
exports.render = function(req, res) {
    res.render('index',{
    	user:JSON.stringify(req.user)
    });
};

