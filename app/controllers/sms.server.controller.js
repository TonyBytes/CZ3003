exports.sendMessage= function (to, message) {

    const data= JSON.stringify({
        api_key: '5badeb09',
        api_secret: 'ce58b9fdafcd3d33',
        to: to,
        from: 'NOTIFICATIONMANAGER',
        text: message
    });

    const options = {
        host: 'rest.nexmo.com',
        path: '/sms/json',
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    var req = https.request(options);

    req.write(data);
    req.end();

    var responseData = '';
    req.on('response', function(res){
        res.on('data', function(chunk){
            responseData += chunk;
        });

        res.on('end', function(){
            console.log(JSON.parse(responseData));
        });
    });
}