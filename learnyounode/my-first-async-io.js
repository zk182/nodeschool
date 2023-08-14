const fs = require('fs');
const path = process.argv[2];

const spaces = fs.readFile(path, (err, data) => {
    console.log(data.toString().split('\n').length - 1);
})