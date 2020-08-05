var app = require('express')();
var server = require('http').createServer(app);
// http server를 socket.io server로 upgrade한다
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

//연결되면 인자로 socket이 들어온다
io.on('connection', function(socket) {

  socket.on('login', function(data) {
    console.log('Client logged-in:\n name:' + data.name + '\n userid: ' + data.userid);//사용자 정보 출력

    //socket에 클라이언트 정보 저장
    socket.name = data.name;
    socket.userid = data.userid;
  });
  socket.on('chat', function(data) {//클라이언트로부터의 메시지 수신
    console.log('Message from %s: %s', socket.name, data.msg);
    var msg = {
      from: {
        name: socket.name,
        userid: socket.userid
      },
      msg: data.msg
    };
    socket.broadcast.emit('chat', msg);
  });//메시지 전송
  socket.on('forceDisconnect', function() {
    socket.disconnect();
  })
  //연결x
  socket.on('disconnect', function() {
    console.log('user disconnected: ' + socket.name);
  });
});
server.listen(3001, function() {
  console.log('server listening on port 3001');
});