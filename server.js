var pty = require('pty.js');

var WebSocketServer = require('ws').Server;
var wss             = new WebSocketServer({port: 9999});

wss.on('connection', function(ws) {

  var term = pty.spawn( __dirname + '/node_modules/.bin/nsh', [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  });

  term.on('exit', function (code, signal) {
    ws.close();
  });

  term.on('data', function(data) {
    ws.send(data);
  });

  ws.on('message', function(message) {
    term.write(message);
  });

});
