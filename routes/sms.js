var config = require('config.json');
var express = require('express');
var twilio = require('twilio');
var router = express.Router();
var smsService = require('services/sms.service');
var passcode = require("passcode");

// routes
router.post('/sendSms', sendSms);
router.post('/addSecret', addSecret);

module.exports = router;

function sendSms(req, res) {
    var country_code = "+91";
    var tophone = country_code + req.body.phone;
    var body = req.body.body;

    if (!body) {
        var dateFormat = require('dateformat');
        var now = Date();
        var day = dateFormat(now, "N");
        var token = passcode.hotp({
            secret: req.body.tophone + day,
            counter: 123
        });
        body = "Your Foodtriangle OTP is:" + token;
    }

    //var secret = getSecret();
    //console.log(secret);
    // Twilio Credentials 
    var accountSid = 'ACefe3ed9e829342608ec580dc72156580';
    var authToken = 'd8b364cfdeebaca801014820c040ddaf';

    //require the Twilio module and create a REST client 
    var client = require('twilio')(accountSid, authToken);

    client.messages.create({
        to: tophone,
        from: "+18156008996",
        body: body,
     }, 
    function (err, message) {
        if (err) {
            res.status(400).send(err);
        }
        else if (message) {
            res.sendStatus(200);
        }
    });
}

function addSecret(req, res) {
    smsService.addSecret(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getSecret(req, res) {
    smsService.getSecret()
        .then(function (secret) {
            res.send(secret);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
