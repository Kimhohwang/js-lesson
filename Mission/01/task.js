/*
  [01. 숫자를 문자로]
  - 자료형
  
  N자리 숫자 num이 주어질 때,
  이를 문자열로 변환한 값을 return 하도록 함수를 완성하시오.
  ex)
  - 1234 => "1234"
  - 707 => "707"
*/

function solution(num) {
  let answer = 0;
  // TODO
  if (typeof num == "number") {
    answer = String(num) + "$";
  }

  return answer;
}

console.log(solution(1234));
console.log(solution(707));
console.log(solution(100000));
console.log(solution(998877));
