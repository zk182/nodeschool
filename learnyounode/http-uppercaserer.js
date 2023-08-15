const http = require('http');
const fs = require('fs'); 
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method == 'POST') {
    let data = '';
    req.on('data', (chunks) => {
      data += chunks.toString().toUpperCase();
    })
    req.on('end', () => {
      res.writeHead(200, "OK", {'Content-Type': 'text/plain' });
      res.end(data);
    })
  }
});

// Grab an arbitrary unused port.
server.listen(port,() => {
    console.log('opened server on', server.address());
}); 