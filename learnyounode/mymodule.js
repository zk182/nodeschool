const fs = require('fs');

module.exports = async (dirPath, ext, callback) => {
    fs.readdir(dirPath, (err, data) => {
        if (err) {
            return callback(err);
        }
        const results = data.filter(value => value.endsWith(`.${ext}`));
        return callback(null, results);
    });
}