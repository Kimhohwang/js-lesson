/* 01.변수_선언 */

let 변수명1 = 5000;
const 변수명2 = 5000;
let 변수명3 = "5000";  //문자로 인식//
const 변수명4 = "5000"; //문자로 인식//
// console.log(typeof 변수명1);
// console.log(typeof 변수명4);

// 문자와 숫자도 더할수있지만 계산은 불가능하다 //
// console.log(변수명1 + 변수명3);
// console.log(변수명1 + 변수명2 + 변수명3);




/* 02.변수명_규칙.js */

// 규칙1 카멜 케이스 : 제일 앞자리 단어를 제외한 단어 대문자로 시작 //

// 규칙2 줄여쓰기 금지 //

// 규칙3 숫자 사용 주의 필요 : 숫자가 앞에있으면 안되 //

// 규칙4 불변 상수 : 변하지않는 값에대한건 전체_대문자를 사용해 //




/* 03.자료형.js */

let adminMessage = "안녕하세요";
adminMessage = 1234;    // let 을 사용하지 않았는데 왜 값이 1234지?? //

console.log(adminMessage + 1);

let n = 100 + "3.141592";
let z = 100;
let y = 200;

let m = z + y;

console.log(n);
console.log(typeof n);

let str = `${m}`;
console.log(str);
console.log(typeof str);

let xtr = `변수 삽입도 가능 => ${n}`;
console.log(xtr);
console.log(typeof xtr);






