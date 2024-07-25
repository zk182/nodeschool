const concat = require('concat-stream');

function justLog(data) {
	const result = data.toString().split('').reverse().join('');
	process.stdout.write(result);
}

const concatStream = concat(justLog);

process.stdin.pipe(concatStream);
