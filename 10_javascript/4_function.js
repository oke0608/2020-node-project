//첫번째 방식
function add(i, j) {
    return i + j;
}
console.log(add(2, 3));

//두번째 방식
var add2 = function(i, j) {
    return i + j;
};
console.log(add2(2, 3));
console.log(typeof add2);

//세번째 방식
var add3 = (function(i, j) {
    return i + j;
})(2, 3);
console.log(add3);
console.log(typeof add3);

//네번째 방식(arrow function)
var add4 = ((i, j) => i + j)(2, 3);
console.log(add4);