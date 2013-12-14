#!/usr/bin/env node

var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:9999/', {protocolVersion: 8, origin: 'http://websocket.org'});

ws.on('open', function() {
  
});

ws.on('close', function() {
  
});

process.stdin.on('data', function (chunk) {
  ws.send(chunk);
});

ws.on('message', function(data, flags) {
  process.stdout.write(data);
});

process.stdin.setRawMode(true);
process.stdin.resume();
