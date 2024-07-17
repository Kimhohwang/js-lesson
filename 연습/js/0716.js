let 변수1 = 5000;
console.log(변수1);

let 변수2 = 5000;
console.log(변수1 + 변수2);

let 변수3 = "5000";

console.log(변수1 + 변수3);
console.log("변수1 :" + 변수1);

console.log(변수1 + 변수3 + 변수2);

const 변수4 = 변수1 + 변수2;
console.log(변수4);

let str = 변수4;
console.log(str);

console.log(`1 더하기 1은 ${1 + 1}`);

//이해가 잘안되는부분 03.자료형.js - 02:문자 중 변수삽입 `//

let userData = { 커피: "아메리카노", price: 1500 };

console.log(userData);

// new Date(); 입력 하지않고 그냥 Date만 입력시에도 값이 출력되는데 어떤차이인지?? //
let today = Date();
console.log(today);

let isUserOk = false;
console.log(typeof Number(isUserOk)); // => boolean
console.log(typeof String(isUserOk)); // => string

let money = 100.3;
money = money + "$";
console.log(typeof money);
console.log(money);

let count = 5;
count = count + 1;
console.log(count); // => 6
count += 1;
console.log(count); // => 7
count -= 5;
console.log(count); // => 2
count *= 10;
console.log(count); // => 20

console.log(2 > 1);
console.log(2 >= 2);
console.log(2 == 2);
console.log(2 != 1);
console.log("zebra" < "apple");
console.log("apples" > "apple");
console.log(1 == true);
console.log(1 === true); // => false

const hour = 12;
const minute = 40;
if (hour == 12 && minute == 30) {
  console.log("현재 시각은 12시 30분입니다.");
}

const number = 0;
if (number < 0 || number > 0) {
  console.log("0이 아닌 정수입니다.");
}
