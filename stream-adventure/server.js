import { Transform, pipeline } from 'node:stream';
import http from 'node:http';

class MyTransform extends Transform {
	_transform(chunk, encoding, callback) {
		const upper = chunk.toString().toUpperCase();
		this.push(upper);
		callback();
	}

	_flush(callback) {
		callback();
	}
}

const toUpperStream = new MyTransform();

const server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		pipeline(req, toUpperStream, res, err => {
			if (err) {
				console.error('Pipeline failed.', err);
			} else {
				console.log('Pipeline succeeded.');
			}
		});
	}
});
server.listen(process.argv[2]);
