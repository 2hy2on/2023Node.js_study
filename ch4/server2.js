const http = require("http"); //노드가 http서버를 쉽게 만들 수 있도록 제공
const fs = require('fs').promises;

const server = http.createServer(async (req,res) => {
    try{
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        const data = await fs.readFile('./ch4/server2.html');
    res.end(data);
    } catch(error){
        console.error(error);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(error.message);
    }
})
    .listen(8080);
     //노드도 프로그램이기 때문에 실행하는 순간 프로세스에 올려줌
//listion을 하면 터미널 하나를 잡아먹음 == 다른 동작은 할 수 없게 됨
//8080번 포트에 프로새스를 띄우고 클라이언트에 요청을 보내 응답까지
//https이 적용된 사이트는 보통 443이 붙음 따라서 생략 가능(ex. 네이버)
//비동기 처리이기 때문에 에러 날 수 있으니
server.on('listening', () =>{
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error',(error) => {
    console.error(error);
} );