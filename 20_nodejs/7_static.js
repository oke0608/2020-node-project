const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

///127.0.0.1/dog.jpg
const server = http.createServer((req, res) => {
  const obj = path.parse(req.url);
  const filename = obj.base;
  const imagePath = `${__dirname}${path.sep}images${path.sep}${filename}`;
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not Found");
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpeg');
    res.end(data);
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});