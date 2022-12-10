import math, { PI as PINUM, getSum } from "./lib.mjs";

// 최신문법의 기준 ES6(2015년 기준)

/* 
    1. var 문제점
        1) 중복 선언이 가능하다. => '의도하지 않게' 값이 변경될 수 있어서 예상치 못한 오류가 발생한다.
        2) 변수 호이스팅(끌어올림)이 발생한다. => 변수 선언 이전에 참조가 된다. 변수 초기화시 undefined가 할당된다.
        3) 블록 레벨 스코프(유효범위)를 지원하지 않는다.

*/

console.log(num); // 호이스팅

var num = 10;
console.log(num);

var num = 30; // 중복 선언
console.log(num);

function sum(a) {
  var num = 0;
  num = num + a;
  return num;
}

console.log(sum(10));
console.log(num);

if (true) {
  var num = 100;
  var num02 = 200; // 블록 레벨 스코프를 지원하지 않기 때문에 전역 변수 num02가 생성된다.
  console.log(num);
}

console.log(num, num02);

if (true) {
  //console.log(num03);  // 선언 이전에 참조 불가능 => 엄밀히 말하면 호이스팅 자체는 일어난다. => TDZ 문제
  let num03 = 10;
  //let num03 = 20;  // 중복 선언 불가능
}

//console.log(num03);  // 블록 레벨 스코프를 지원하기 때문에 전역 변수가 생성되지 않는다.

const TAX = 10; // Constant (상수) => 값을 무조건 초기화시켜야한다.
//TAX = 100;  // 상수이기 때문에 재할당 불가능

console.log("세율이 " + TAX + "% 입니다.");

// 템플릿 리터럴 : ``(백틱, 그레이브) 안에 표현식${} 을 포함시킬 수 있다.
console.log(`세율이 ${TAX + 10 / 2}% 입니다.`);

/*
    화살표 함수 (Arrow function)
        1) 표현이 간결하기 때문에 주로 콜백함수로 전달할 때 사용한다.
        2) 코드블록을 생략하면 리턴을 생략할 수 있다.
            - 코드블록과 객채는 동일하게 {}를 사용하기 때문에, 객체인 경우 소괄호()로 한번 더 감싸야한다.
        3) this 바인딩이 되지 않는다.
*/
/*
let divide = (a, b) => {
  return a / b;
};
*/
let divide = (a, b) => a / b;

console.log(`10 / 2 = ${divide(10, 2)}`);

setTimeout(() => {
  console.log("2초 경과");
}, 2000);

let getObj = (name, age) => {
  return {
    //name : name,  // 키값과 식별자가 동일하면 생략 가능
    name,
    age,
  };
};

let getObj2 = (name, age) => ({ name, age }); // 블록

let user = {
  name: "hyun",
  age: 30,

  hello: () => {
    // 화살표 함수를 사용하면 this가 바인딩 되지 않는다.
    //console.log(this.name, this.age);
  },
};

user.hello();

/* 
    비구조화 할당
        - 객체나 배열의 값을 간결하게 할당할 수 있다.
            1) 객체는 변수 선언을 중괄호{} 안에 해주면 된다. => 객체의 키값과 동일하게 작성해야 된다.
            2) 배열은 [] 안에 순서대로 변수명을 작성하면 배열에 저장된 인덱스에 따라 값이 할당된다.
                => 객체 비주고할당에 비해 변수명을 자유롭게 지을 수 있다.
                훅을 사용할 때 주로 사용함...
*/

//let name = user.name;
//let age = user.age;

let { name: userName, age, height } = user;
console.log(userName, age, height);

let arr = ["hyun2", 30, "apple", function () {}];
let [name02, age20, fruit, func] = arr;

console.log(name02, func);

/* 
    펼침 연산자(스프레드)
        1) 배열이나 객체를 나열하는 효과가 있다. => 기존값을 복사하고, 새로운 값을 추가 및 변경하는데 유용하다.
        2) 복사할 경우 참조값 복사가 아니라 갑 자체를 옮길 수 있기 때문에 불변성을 지킬 수있다.
            => 객체가 중첩되는 경우 중첩된 객체는 참조 복사가 일어난다.
*/

let copy = user;
let copy02 = { ...user, done: true, name: "korean" };
copy02.age = 31; // 객체는 참조값을 복사해온더,
console.log(user, copy02, user === copy02);

let copyArr = [1, ...arr, false];
console.log(copyArr);

let numArr = [1, 2, 10, 5, 7];
let max = Math.max(...numArr);
console.log(max);
console.log(numArr);

console.log(PINUM);
console.log(getSum(1, 2));

console.log(math.PI);
