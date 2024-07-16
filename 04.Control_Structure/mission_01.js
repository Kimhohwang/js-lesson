/*
  두 개의 숫자를 입력하여 연산하는 계산기를 구현한다.
  연산의 종류는 +, *, % 3개의 종류가 있다.
  연산의 종류를 판별하여 적절한 연산을 수행 후 결과를 출력한다.

  만약 하나라도 숫자 이외의 입력이 발생하면 연산의 결과는 null을 출력한다.
  만약 하나라도 지정 연산자 3개 이외의 입력이 발생하면 연산의 결과는 null을 출력한다.
*/

const input1 = 10;
const input2 = 3;
const operator = "%";

// 숫자가 아니면 나가
const input1_은_숫자가_아니야 = typeof input1 != "number"; // => true
const input2_은_숫자가_아니야 = typeof input2 != "number"; // => true
if (input1_은_숫자가_아니야 || input2_은_숫자가_아니야) {
  console.log(null);
}

// 연산자가 3개 이외에 다른거면? 나가
// 만약 다 통과라면,
// 만약 + 라면? + 연산
// 만약 * 라면? * 연산
// 만약 % 라면? % 연산
// 결과 출력 console.log
