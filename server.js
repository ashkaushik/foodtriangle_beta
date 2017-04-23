<<<<<<< HEAD
=======
"use strict";
>>>>>>> origin/foodtriangle_node
//Required variable
require('rootpath')();
var express = require('express'), 
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    path = require('path'),
    bodyParser = require('body-parser'),
    expressJwt = require('express-jwt'),
    cors = require('cors'),
    config = require('config.json');
<<<<<<< HEAD

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
=======
    
const compression = require('compression')

const E2E_PORT = require('./constants').E2E_PORT;
const HOST = require('./constants').HOST;
const PROD_PORT = require('./constants').PROD_PORT;

const ROOT = path.join(path.resolve(__dirname, '..'));

//View Engine
app.set('views', path.join(__dirname, 'dist/client'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Routing
  var index = require('./routes/index'),
      tasks = require('./routes/tasks'),
      user  = require('./routes/user.js'),
      menu  = require('./routes/menu.js');
>>>>>>> origin/foodtriangle_node

// Body Parser MW
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

<<<<<<< HEAD
//Index
app.use('/', index);
app.use('/api', tasks);
app.use('/users', user);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

//Server Configuration
server.listen(8080,'10.128.0.2',function(){
  console.log('server started at 10.128.0.2:8080');
});
=======
//Indexing
app.use('/', index);
app.use('/api', tasks);
app.use('/users', user);
app.use('/menus', menu);

app.use(compression());
app.use(express.static('dist/client'));

const renderIndex = (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/client/index.html'));
}

app.get('/*', renderIndex);

let e2e;
const ENV = process.env.npm_lifecycle_event;
if (ENV === 'e2e:server') { e2e = E2E_PORT };
const PORT = e2e || PROD_PORT;

app.listen(PORT, () => {
  console.log(`Listening on: http://${HOST}:${PORT}`);
});
>>>>>>> origin/foodtriangle_node
