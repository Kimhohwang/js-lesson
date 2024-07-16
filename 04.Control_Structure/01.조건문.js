const 오늘_온도 = 24;
if (오늘_온도 >= 30) {
  console.log("덥다");
} else if (오늘_온도 <= 20) {
  console.log("쌀쌀하다");
} else {
  console.log("적당하다");
}

if (오늘_온도 <= 30) {
  if (오늘_온도 > 25) {
    console.log("약간 덥다");
  } else {
    console.log("적당하다");
  }
}
