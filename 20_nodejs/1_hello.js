//웹 어플리케이션=프론트엔드(화면)+백엔드(서버)
//JS=>프론트엔드(브라우저 내에서 동작)
//HTML, CSS, Javascript

//1. 크롬 v8엔진->용도 변경(브라우저 밖에서 쓸 수 있게)
//2. 이벤트 기반의 비동기 I/O
//3. 모듈 시스템 기반->파일 형태로 모듈을 관리(CommonJs 표준 스펙)

//Node.js로 Hello,World 출력
//1. REPL
//2. 콘솔에 출력
//3. 웹서버로 출력
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(req.url);
    if (url === "/") {
        res.statusCode = 200;//OK
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    } else if (url === "/html") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<!DOCTYPE html>");
        res.write("<html>");
        res.write("<body><h1>Hello, World</h1></body>");
        res.write("</html>");
    } else if (url === "/json") {
        const data = { msg: "Hello, World" };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    } else {
        const data = { msg: "Not Found" };
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});