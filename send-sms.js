// Twilio Credentials 
var accountSid = 'ACb55b905950b9ff0773208a9218d32f9a'; 
var authToken = '4ac1e41c6d30f966a0681f8d4e5477aa'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
var dateFormat = require('dateformat');
var now = Date();
var day = dateFormat(now, "N");
client.messages.create({ 
    to: "+919910454530", 
    from: "+15005550006", 
    body: "Your foodtriangle otp is: 257486", 
}, function(err, message) { 
    console.log(err);
    console.log(message.sid); 
});