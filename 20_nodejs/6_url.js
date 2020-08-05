//기본모듈 url-> URL 처리하는 모듈
const url = require("url");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  //strig->object
  //query string이라 뽑을 때 query로 뽑아야함
  const obj = url.parse(req.url, true);
  console.log(obj);
  const year = obj.query.year;
  const cls = obj.query.class;
  const name = obj.query.name;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(`${year}학년 ${cls}반 ${name}입니다.!!`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});