import trumpet from 'trumpet';
import { Transform } from 'node:stream';

const tr = trumpet();

class UpperStream extends Transform {
	_transform(chunk, encoding, callback) {
		const data = chunk.toString().toUpperCase();
		this.push(data);
		callback();
	}
}

const myUpperStream = new UpperStream();

const loudStream = tr.select('.loud').createStream();

loudStream.pipe(myUpperStream).pipe(loudStream);

process.stdin.pipe(tr).pipe(process.stdout);
