// REQUIREMENTS
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// SETUP
const app = express();
const port = 8080;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// MIDDLEWARE
app.use((req, res, next) => {
  console.log(req.ip, req.method, req.url);
  next();
});

// ROUTES
app.get('/', (req, res) => {
  res.send('Homepage!');
});

// SOCKET
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('ping', () => {
    console.log('ping');
    socket.emit('pong');
  });

  socket.on('data', (data) => {
    console.log('receiving data:', data);
    // write data in db
  });
});

// LISTENER
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
