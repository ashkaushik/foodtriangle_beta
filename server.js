var express = require('express'), 
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    path = require('path'),
    bodyParser = require('body-parser');

var index = require('./routes/index'),
    tasks = require('./routes/tasks');

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Index
//app.get('/',function(req,res){  
  //  res.sendfile('index.html');
    //console.log('hello world');
//});
app.use('/', index);
app.use('/api', tasks);

//Server Configuration
server.listen(8080,'10.128.0.3',function(){
  console.log('server started at 10.128.0.3:8080');
});
