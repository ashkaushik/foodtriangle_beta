var express = require('express')
  
, http = require('http')
  
, app = express()
  
, server = http.createServer(app);



app.get('/',function(req,res){
  
res.sendfile('index.html');
console.log('hello world');
});


server.listen(8080,'10.128.0.3',function(){

  console.log('server started at 10.128.0.3:8080');
}
);
