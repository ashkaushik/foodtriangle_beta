//Required variable
require('rootpath')();
var express = require('express'), 
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    path = require('path'),
    bodyParser = require('body-parser'),
    expressJwt = require('express-jwt'),
    cors = require('cors');
    config = require('config.json');

//Routing
  var index = require('./routes/index'),
      tasks = require('./routes/tasks');
      user  = require('./routes/user.js');

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'src')));

// Body Parser MW
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Index
app.use('/', index);
app.use('/api', tasks);
app.use('/users', user);

//Server Configuration
server.listen(8080,'127.0.0.1',function(){
  console.log('server started at 127.0.0.1:8080');
});
