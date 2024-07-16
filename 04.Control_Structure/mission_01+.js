/*
  두 개의 숫자를 입력하여 연산하는 계산기를 구현한다.
  연산의 종류는 +, *, % 3개의 종류가 있다.
  연산의 종류를 판별하여 적절한 연산을 수행 후 결과를 출력한다.
  만약 하나라도 숫자 이외의 입력이 발생하면 연산의 결과는 null을 출력한다.
  만약 하나라도 지정 연산자 3개 이외의 입력이 발생하면 연산의 결과는 null을 출력한다.
*/

const input1 = 10;
const input2 = 3;
const operator = "+";

let result = 0;

const isInputIsNumber = typeof input1 == "number" && typeof input2 == "number";
const isOperatorValid = operator == "+" || operator == "*" || operator == "%";

if (!isInputIsNumber || !isOperatorValid) {
  result = null;
} else {
  if (operator == "+") {
    result = input1 + input2;
  } else if (operator == "*") {
    result = input1 * input2;
  } else if (operator == "%") {
    result = input1 % input2;
  }
}

console.log(result);
