/*
  [02. 수수료 부과]
  - 연산, 조건문 

  배송비 fee가 인자로 주어질 때,
  배송비가 10,000원 이상이면 5%의 수수료를 부과하여,
  총 배송비를 return 하도록 함수를 완성하시오.
  ex)
  - 5000 => 5000
  - 9900 => 9900
  - 20000 => 21000
  - 100000 => 105000
*/

function solution(fee) {
  let answer = 0;

  // TODO
  
  if (fee >= 10000) {
    answer = (fee + fee * 0.05) / 1300 + "$";
  } else {
    answer = fee / 1300 + "$";
  }
  return answer;
}

console.log(solution(5000));
console.log(solution(9900));
console.log(solution(10000));
console.log(solution(20000));
console.log(solution(100000));
