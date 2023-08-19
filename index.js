const websocket = require('ws')
const fs = require('fs');

const wss = new websocket.WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    fs.appendFile('file.log', content, err => {
        if (err) {
          console.error(err);
        }
      });
  });
});