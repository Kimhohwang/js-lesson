/* 종류-01. 문자로 변환 */
let isUserOk = true;
console.log(typeof isUserOk); // => boolean
console.log(typeof String(isUserOk)); // => string

let money = 100.3;
money = money + "$";
console.log(typeof money); // => string

/* 종류-02. 숫자로 변환 */
let age = "20";
age = Number(20);
console.log(typeof age); // => number

age = "내 나이는 20살";
age = Number(age);
console.log(age); // => NaN

/* 종류-03. 불리안 */
console.log(true == 1);
console.log(false == 0);
console.log(false == "");
