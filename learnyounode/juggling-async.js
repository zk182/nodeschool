const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const http = require('http');

const createPromise = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (stream) => {
            let chunks = '';
            stream.on('data', (chunk) => {
                chunks += chunk.toString();
            })
            stream.on('error', (err) => {
                reject(err);
            })
            stream.on('end', () => {
                resolve(chunks);
            })
        })    
    })
}

createPromise(url1).then((data) => {
    console.log(data);
    createPromise(url2).then((data) => {
        console.log(data);
        createPromise(url3).then((data) => {
            console.log(data);
        });
    });
});