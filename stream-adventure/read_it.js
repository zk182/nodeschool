const content = process.argv[2];
const { Readable } = require('stream');

const myStream = new Readable();
myStream._read = () => {}

myStream.push(content);

myStream.pipe(process.stdout);