const url = process.argv[2];
const http = require('http');

http.get(url, (stream) => {
    let chunks = '';
    stream.on('data', (chunk) => {
        chunks += chunk.toString();
    })
    stream.on('end', () => {
        console.log(chunks.length);
        console.log(chunks);
    })
})