const fs = require('fs');

const writeStream = fs.createReadStream('./writeme2.txt');
writeStream.on('finish', () =>{
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n'); //버퍼 하나
writeStream.write('한 번 더 씁니다.\n');
writeStream.end();
 
