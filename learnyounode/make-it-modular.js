const fs = require('fs');
const myModule = require('./mymodule');
const dirPath = process.argv[2];
const ext = process.argv[3];

const callback = (err, data) => { 
    if (!err) {       
        for (value of data) {
            console.log(value);
        }
    }
}

myModule(dirPath, ext, callback);