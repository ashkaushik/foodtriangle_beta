This foodtriangle app is based on MVC framework. 

1.curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
2.sudo apt-get install -y nodejs
3.create folder f
4. cd f
5. npm install
6. npm install express --save



var express = require('express')
  , http = require('http')
  , app = express()
  , server = http.createServer(app);

app.get('/',function(req,res){
  res.sendfile('index.html');
});

server.listen(8080,'10.128.0.3',function(){
console.log('server started');
});

