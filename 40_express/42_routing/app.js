const express = require('express')
const logger = require("morgan");
const app = express()
const port = 3000
const bodyParser = require("body-parser");
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


//로깅 미들웨어 설정
app.use(logger("dev"));

//true: qs(확장모듈), false: querystring(기본모듈)
app.use(bodyParser.urlencoded({ extended: false }));

//바디메시지가 JSON 형식으로 전달되는 경우
app.use(bodyParser.json());

//라우팅 모듈 설정
app.use("/api", require("./api"));

//여기까지 내려왔다는 것은 위에서 처리가 되지 않음
app.use((req, res, next) => {
  const error = new Error("없는 페이지입니다.");
  error.code = 404;
  next(error);  
  //throw new Error("없는 페이지입니다");
});

//오류 처리 미들웨어
app.use((err, req, res, next) => {
  //if (err.code) res.status(err.code);
  //else res.status(500);//Interal Server Error
  res.status(err.code || 500);
  //if (err.message) res.send(err.message);
  //else res.send("Internal Server Error");
  res.send(err.message || "Internal Server Error");
});