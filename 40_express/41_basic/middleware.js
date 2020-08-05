const express = require('express')
const app = express()
const port = 3000
const moment = require("moment");
const morgan = require("morgan");

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const mw1 = (req, res, next) => {
  console.log("첫 번째 미들웨어");
  next();//다음번 미들웨어 호출
}

const mw2 = (req, res, next) => {
  console.log("두 번째 미들웨어");
  next();
}

//로깅처리 미들웨어 함수
//METHOD, /, 요청시각
const logger = (req, res, next) => {
  const { method, url } = req; //{req.method.xx, req.url.xx}
  const time = moment().format("YYYY-MM-DD HH:mm:ss:SSS");
  console.log(`${method} - ${url} - ${time}`);
  next();
}


//1. 어플리케이션 레벨 미들웨어
//순서가 중요
app.use(mw1);
app.use(mw2);

app.use(logger);

app.get("/", (req, res) => res.send("안뇽"));

app.get("/hello", (req, res) => res.send("머여"));
//2. 라우터 레벨 미들웨어

//3. 내장(기본 제공) 미들웨어
app.use(express.static("public"));

//4. 써드 파티 미들웨어
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//5. 오류 처리 미들웨어
app.use((err, req, res, next) => {
  res.status(err.code || 500);
  res.send(err.message || "Internal Server Error");
});