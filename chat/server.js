const net = require('net');
const server = net.createServer();
server.on('connection', (socket) => {
  socket.on('data', (data) => {
    console.log("data", data.toString('utf-8'));
    socket.write(data);
 })
})
server.listen(3008, '127.0.0.1', () => {
  console.log('server info', server.address());
})
