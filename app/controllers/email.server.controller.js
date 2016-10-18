var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Hotmail',
    port: 587,
    secureConnection: true,
    auth: {
        user: 'cmsse7en@outlook.com',
        pass: 'cz3003se7en'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'cmsse7en@outlook.com',
    to: 'sumdreamin@gmail.com',
    subject: 'CMS email api test',
    text: 'Hello world.',
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);

});