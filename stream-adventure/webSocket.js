import WebSocket, { createWebSocketStream } from 'ws';

const ws = new WebSocket('ws://localhost:8099');
const stream = createWebSocketStream(ws);

stream.pipe(process.stdout);

stream.write('hello\n');
