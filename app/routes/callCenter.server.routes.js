

incident= require('../controllers/incidents.server.controller.js');
mySMSAPI= require('../controllers/sms.server.controller.js');

module.exports= function (app){
	app.route('/callCenter/incident').post(incident.create).get(incident.list);
	
	app.post('/api/sendMessage', function(req, res) {

	    var toNumber = req.to;
	    var sms= req.sms;
	    mySMSAPI.sendMessage(toNumber, sms);

	    console.log("SMS Notification Pushing to... ", toNumber);

	});
}

