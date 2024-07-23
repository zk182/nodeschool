const { pipeline } = require('node:stream');

async function* toUpper(source) {
    for await (const chunk of source) {
        yield String(chunk).toUpperCase();
    }
}

pipeline(process.stdin, (data) => toUpper(data), process.stdout, (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
)