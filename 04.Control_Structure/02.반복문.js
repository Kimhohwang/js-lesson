/* 종류-01. for */
// for (begin; condition; step) { body }
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// begin을 실행함
let i = 0;
// condition이 true이면 → body를 실행한 후, step을 실행
if (i < 3) {
  console.log(i);
  i++;
}
// condition이 true이면 → body를 실행한 후, step을 실행
if (i < 3) {
  console.log(i);
  i++;
}
// condition이 true이면 → body를 실행한 후, step을 실행
if (i < 3) {
  console.log(i);
  i++;
}

/* 종류-02. while */
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i += 1;
// }

/* 주의사항 */
// //! Error
// for (let i = 0, sum2 = 0; i < 3; i++) {
//   sum2 += i;
// }
// console.log(sum2);
