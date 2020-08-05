const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const logger = require("morgan");

//true: qs(확장모듈), false: querystring(기본모듈)
app.use(bodyParser.urlencoded({ extended: false }));

//바디메시지가 JSON 형식으로 전달되는 경우
app.use(bodyParser.json());


//정적파일 위치 설정
app.use(express.static("public"));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


//로깅 미들웨어 설정
app.use(logger("common"));


app.get('/', (req, res) => res.send('Hello World!'))



//QueryString


app.get("/music/:singer/:title", (req, res) => {
  console.log(req);
  res.send(`url parameter(get) -> ${req.params.singer}의 ${req.params.title}`);
});


app.get('/music', (req, res) => {
  res.send(`${req.query.singer}의 ${req.query.title}입니다.`)
});

//POST방식
//HTTP Method : GET(조회), POST(생성), PUT(수정, 갱신), DELETE(삭제)

app.post("/music", (req, res) => {
  res.send(`urlencoded(post) -> ${req.body.singer}의 ${req.body.title}입니다.`)
})

//URL 파라미터 방식(REST API)
app.post("/music/:singer/:title", (req, res) => {
  //객체 구조 분해 할당(비구조화)
  const { singer, title } = req.params;
  res.send(`url parameter(post) -> ${singer}의 ${title}입니다.`)
})

app.put("/music/:id", (req, res) => {
  const { singer, title } = req.body;
  const id = req.params.id;
  //{id}=>아이유의 좋은날로 수정됨
  req.send(`${id} -> ${singer}의 ${title}로 수정됨`);
});

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