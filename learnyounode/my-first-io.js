const fs = require('fs');
const path = process.argv[2];

const spaces = fs.readFileSync(path).toString().split('\n').length - 1;
console.log(spaces);