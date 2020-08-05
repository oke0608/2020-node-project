//2.q배열
var arr = [1, 2, 3, 4, 5];
console.log(arr.length);
console.log(arr[arr.length - 1]);

var arr2 = [1, 2, "apple", "banana"];
console.log(arr2[2]);

//반복문
for (i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}

for (i in arr2) {
    console.log(i);
}

for (i of arr2) {
    console.log(i);
}

//index,howmany(삭제),elements(추가)
let a = ["a", "b", "c"];
a.splice(1, 0, "d")
console.log(a);

a.splice(2, 1, "x", "y");
console.log(a);


const b = [1, 2, 3, 4, 5];
const result = b.find(item => item >= 3);
console.log(result);

const result2 = b.filter(item => item >= 3);
console.log(result2);

const result3 = b.map((item) => item * 2);
console.log(result3);