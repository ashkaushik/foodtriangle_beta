var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var server = http.createServer(app);

//var index = require('./routes/index');
//var tasks = require('./routes/tasks');

var app = express();

//View Engine
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);

// Set Static Folder
//app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

//app.use('/', index);
//app.use('/api', tasks);

app.get('/',function(req,res){
  
    res.sendFile('index.html');
    console.log('hello world');

});

server.listen(8080,'10.128.0.3',function(){
    console.log('server started at 10.128.0.3:8080');
});

