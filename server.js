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

app.get('/',function(req,res){
  
res.sendfile('index.html');
console.log('hello world');
});


server.listen(8080,'10.128.0.3',function(){

  console.log('server started at 10.128.0.3:8080');
}
);
