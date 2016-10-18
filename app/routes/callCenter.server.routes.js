


mySMSAPI= require('../controllers/sms.server.controller.js')
app.post('/api/sendMessage', function(req, res) {

    var toNumber = req.to;
    var sms= req.sms;
    mySMSAPI.sendMessage(toNumber, sms);

    console.log("SMS Notification Pushing to... ", toNumber);

});