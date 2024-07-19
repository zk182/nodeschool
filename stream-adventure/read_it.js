const content = process.argv[2];
const { Readable } = require('stream');

const myStream = new Readable({
    read: () => {}
});

myStream.push(content);

myStream.pipe(process.stdout);