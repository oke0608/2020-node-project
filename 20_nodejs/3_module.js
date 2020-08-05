//모듈 만들기
/*exports.add = (a, b) => {
    return a, b;
};
exports.sub = (a, b) => {
    return a - b;
};*/

let myCalc = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
};
exports.calc = myCalc;