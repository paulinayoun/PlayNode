const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    // process.exit();
});

server.listen(3000); //서버 계속 실행하면서 응답하기
