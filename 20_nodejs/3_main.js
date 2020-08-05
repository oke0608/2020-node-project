//모듈 사용하기
const calc2 = require("./3_module");
console.log(calc2.calc.add(1, 2));
console.log(calc2.calc.sub(1, 2));

const calc3 = require("./3_module2");
console.log(calc3.mul(2, 3));
console.log(calc3.div(2, 3));