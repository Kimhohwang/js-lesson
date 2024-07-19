/*
  [03. 무료 보관 물품 만료 알림]
  - 객체, 조건문 

  입고된 한 물품의 데이터 객체 boxData가 주어질 때,
  무료 보관 만료 날짜가 지난 물품이라면,
  "EXPIRED!!" 라는 만료 알림을 return 하도록 함수를 완성하시오.
  만료되지 않았다면 "SAFE" 라는 알림을 return 하도록 함수를 완성하시오.
*/

function solution(boxData) {
  let answer = 0;
  // TODO
  const nowDate = new Date();

  if (nowDate > boxData.expiredIn) {
    answer = "EXPIRED!!";
  } else {
    answer = "SAFE";
  }

  return answer;
}

console.log(solution({ id: "RP-001", expiredIn: new Date("2010-01-01") }));
console.log(solution({ id: "RP-002", expiredIn: new Date("2023-12-24") }));
console.log(solution({ id: "RP-003", expiredIn: new Date("2024-12-24") }));
console.log(solution({ id: "RP-004", expiredIn: new Date("2030-01-01") }));
