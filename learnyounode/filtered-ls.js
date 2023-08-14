const fs = require('fs');
const dirPath = process.argv[2];
const ext = process.argv[3];

fs.readdir(dirPath, (err, data) => {
    if (!err) {
        data.map(value => { if (value.endsWith(`.${ext}`)) console.log(value) }); 
    }
})
