//기본모듈vs확장모듈
//path:파일의 경로(URL 경로)를 다루는 모듈
const path = require("path");
console.log(__dirname);
console.log(__filename);

//string->object
const obj = path.parse(__filename);
console.log(obj);