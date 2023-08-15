const net = require('node:net'); 
const port = process.argv[2];

const server = net.createServer((socket) => {
    const date = new Date();
    const first = date.getFullYear() + '-0' + parseInt(date.getMonth()+1) + '-' + date.getDate();
    console.log(date.getDay());
    socket.end(`${first} ${date.getHours()}:${date.getMinutes()}\n`);
  }).on('error', (err) => {
    // Handle errors here.
    throw err;
  });
  
  // Grab an arbitrary unused port.
  server.listen(port,() => {
    console.log('opened server on', server.address());
  }); 