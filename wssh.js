#!/usr/bin/env node

var argv = require('optimist').argv;

var port = argv.port || 9999;
var host = argv._[0];

if (!host) {
  console.log("Usage: wssh HOST");
  return;
}

var wss_url   = require('util').format('ws://%s:%d', host, port);
var WebSocket = require('ws');
var ws        = new WebSocket(wss_url, {protocolVersion: 8, origin: 'http://websocket.org'});

ws.on('open', function() {
  console.log('Session Open');
});

ws.on('close', function() {
  console.log('Session Closed');
  process.exit();
});

process.stdin.on('data', function (chunk) {
  ws.send(chunk);
});

ws.on('message', function(data, flags) {
  process.stdout.write(data);
});

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('close', function () {
  ws.close();
});