const http = require('http');
const fs = require('fs'); 
const port = process.argv[2];
const location = process.argv[3];

const server = http.createServer((req, res) => {
    fs.createReadStream(location, {encoding : 'utf-8'}).pipe(res);
});

  
  // Grab an arbitrary unused port.
  server.listen(port,() => {
    console.log('opened server on', server.address());
  }); 