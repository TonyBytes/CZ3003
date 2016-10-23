

incident= require('../controllers/incidents.server.controller.js');
mySMSAPI= require('../controllers/sms.server.controller.js');

module.exports= function (app){
	app.route('/callCenter/incident').post(incident.create).get(incident.list);
	app.route('/callCenter/incident/:incidentId')
		.get(incident.read)
		.put(incident.update)
		.delete(incident.delete);

	app.post('/api/sendMessage', function(req, res) {

	    var toNumber = req.to;
	    var sms= req.sms;
	    mySMSAPI.sendMessage(toNumber, sms);

	    console.log("SMS Notification Pushing to... ", toNumber);

	});

	app.param('incidentId', incident.incidentByID);
}

