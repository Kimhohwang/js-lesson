/* 동적 타입 언어 */
let adminMessage = "안녕하세요";
adminMessage = 1234;

/* 종류-01. 숫자 */
let n = 100;
n = 3.141592;
n = 100 + 3.141592;
// n = 100 + "문자"; // => NaN

/* 종류-02. 문자 */
let str = "큰 따옴표 가능";
str = "작은 따옴표 가능";
str = `변수 삽입도 가능 => ${n}`; // => 변수 삽입도 가능 => 103.141592         //이해 안된부분//
console.log(`1 더하기 1은 ${1 + 1}`);

/* 종류-03. 불리안 */
let isUserOk = true;
isUserOk = false;
console.log(`n은 100보다 큰가요? => ${n >= 100}`);

/* 종류-04. null */
// 존재하지 않음
let userAddress = null;

/* 종류-05. undefined */
// 아직 할당되지 않음
let userEmail = undefined;

/* 종류-06. 객체 */
let userData = {
  커피: "아메리카노",
  price: 2500,
};

/* 종류-07. 날짜 */
let today = new Date();
console.log(today);
// => 2024-07-16T01:01:03.888Z


