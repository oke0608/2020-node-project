//4.객체
//객체 선언
let a = {};//빈객체
let b = new Object();
console.log(typeof a);

//객체 속성, 메소드 추가
let Person = {};
Person.age = 19;
Person["name"] = "abc";

console.log("%d, %s", Person.age, Person["name"]);

//key:value
let Person2 = {
    age: 10,
    name: "펭수"
};

console.log("%d, %s", Person2.age, Person2["name"]);

let Person3 = {
    age: 10,
    name: "펭수"
};
Person3.print = function () {
    console.log("저는 %d살 %s입니다", this.age, this.name);
}
Person3.print();

let Person4 = {
    age: 10,
    name: "펭수",
    print: function () {
        console.log("저는 %d살 %s입니다", this.age, this.name);
    }
};
Person4.print();

//friends배열->객체 두개(no,name)
let Friends = [{ no: 0, name: 'a' },{ no: 100, name: 'b' }];
console.log(Friends);
console.log(typeof Friends[0].name);

console.log(Friends[1].name);

let grades = {
    data: {
        kor: 100,
        mat: 90,
        eng: 95,
    },
    print: function () {
        for (subject in this.data) {
            console.log(subject + " : " + this.data[subject]);
        }
    }
};
grades.print();

//수학 점수
console.log(grades.data.mat);
console.log(grades.data["mat"]);
console.log(grades["data"].mat);
console.log(grades["data"]["mat"]);

let id = 1;
let name = "홍길동";
let obj={
    id,
    name
};
