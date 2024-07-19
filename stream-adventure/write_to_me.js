const { stdin } = require('process');
const { Writable } = require('stream');

const writeStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(`writing: ${chunk}`);
        callback();
    }  
});

stdin.pipe(writeStream);
