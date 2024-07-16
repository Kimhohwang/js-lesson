/* 종류-01. 사칙 연산 */
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(10 / 2); // => 5
console.log(11 % 3); // => 2
console.log(2 ** 3); // => 8
console.log(1 + 2 * 2); // => 5

/* 종류-02. 문자열 연산 */
console.log("my" + "message"); // => "mymessage"
console.log(2 + 2 + "1"); // => "41"
console.log("2" + "3"); // => "23"

/* 종류-03. 복합 할당 */
let count = 5;
count = count + 1;
console.log(count); // => 6
count += 1;
console.log(count); // => 7
count -= 5;
console.log(count); // => 2
count *= 10;
console.log(count); // => 20

/* 종류-04. 비교 연산 */
console.log(2 > 1);
console.log(2 >= 2);
console.log(2 == 2);
console.log(2 != 1);
console.log("zebra" > "apple");
console.log("apples" > "apple");
console.log(1 == true);
console.log(1 === true); // => false

/* 종류-05. 논리 연산 */
// && 연산
console.log(true && true); // => true
console.log(false && true); // => false
console.log(true && false); // => false
console.log(false && false); // => false

// 예시
const hour = 12;
const minute = 30;
if (hour == 12 && minute == 30) {
  console.log("현재 시각은 12시 30분입니다.");
}

// || 연산
console.log(true || true); // => true
console.log(false || true); // => true
console.log(true || false); // => true
console.log(false || false); // => false

// 예시
const number = 2;
if (number < 0 || number > 0) {
  console.log("0이 아닌 정수입니다.");
}

// ! 연산
console.log(!true); // => false
console.log(!false); // => true
// 예시
const age = 17;
const 성인인가요 = age >= 20;
if (!성인인가요) {
  console.log("아닙니다.");
}
