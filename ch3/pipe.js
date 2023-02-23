const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const zlibStream = zlib.createGzip(); //압축
const writeStream = fs.createReadStream('./writeme3.txt');
//readStream.pipe(writeStream);
readStream.pipe(zlibStream).pipe(writeStream); //압축된걸 write3에 저장
