//파일시스템을 다루기 위한 모듈
//기본모듈
const fs = require("fs");

//파일 읽기
//동기식
try {
    const data = fs.readFileSync("hello.txt", "utf8");
    console.log(data);
} catch (exception) {
    console.error("동기식 error: " + exception);
    return;
}
console.log("동기식 읽기 완료");

//비동기식
fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
        console.error("비동기식 error: " + err);
    } else {
        console.log(data);
    }
});
console.log("비동기식 읽기 완료");