var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log("new user")
  socket.on('board', function(cells){
    io.emit('board', cells);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
