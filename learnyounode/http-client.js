const url = process.argv[2];
const http = require('http');

http.get(url, (stream) => {
    const chunks = [];
    stream.on('data', (data) => {
        chunks.push(data);
    })
    stream.on('end', () => {
        const values = chunks.toString().split(',');
        for (value of values) {
            console.log(value);
        }
    })
})