const { pipeline, Transform } = require('node:stream');

class LineTransform extends Transform {
	constructor() {
		super();
		this.lineIndex = 0;
	}

	_transform(chunk, encoding, callback) {
		let lines = chunk.toString().split('\n');
		lines.pop();

		for (const line of lines) {
			const transformedLine =
				this.lineIndex % 2 === 0 ? line.toLowerCase() : line.toUpperCase();
			this.push(transformedLine + '\n');
			this.lineIndex++;
		}

		callback();
	}
}

const Line = new LineTransform();

pipeline(process.stdin, Line, process.stdout, err => {
	if (err) {
		console.error('Pipeline failed.', err);
	} else {
		console.log('Pipeline succeeded.');
	}
});
