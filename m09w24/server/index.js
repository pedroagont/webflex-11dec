// REQUIREMENTS
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// SETUP
const app = express();
const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

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
});

// LISTENER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
