/* 01. 매개변수 */
let userName = "Kim";
function showMessage(userName) {
  let message = "Hello, " + userName;
  console.log(message);
}
showMessage(userName);

//! Bad Case
// let userName = "Kim";
// function showMessage() {
//   userName = "Han";
//   let message = "Hello, " + userName;
//   console.log(message);
// }
// showMessage();

/* 02. 반환값 */
function isAdult(age) {
  if (age >= 20) {
    return true;
  } else {
    return false;
  }
}
let age = 22;
if (isAdult(age)) {
  console.log("접속 허용");
} else {
  console.log("접속 차단");
}

/* 03. 함수 변수 */
const message = function sayHi(message) {
  return `메시지: ${message}`;
};
console.log(message("Hello"));
