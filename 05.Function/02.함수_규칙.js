/* 규칙-01. 함수명 */
showUserInformation(); // Good
isValidBox(); // Good
checkShippingFee(); // Good
UserProfileMaker(); // Not Good => createUserProfile() << Good
csf(); // Not Good
checkshippingfee(); // Not Good

/* 규칙-02. 한 함수는 하나의 동작만 */
// Good Example
function checkShippingFee(shippingFee) {
  if (shippingFee >= 10000) {
    return "1만원 이상";
  } else {
    return "1만원 이하";
  }
}

// Bad Example
function checkShippingFee(shippingFee) {
  const 서비스_비용_비율 = 10;
  const 유류_할증료 = 4000;
  shippingFee = shippingFee * (서비스_비용_비율 / 100) + 유류_할증료;
  if (shippingFee >= 10000) {
    return "1만원 이상";
  } else {
    return "1만원 이하";
  }
}

/* 추천! 규칙-03. 함수 선언 후 사용 */

sayHi("Kim"); // OK! but Not Good
function sayHi(name) {
  console.log(`Hello, ${name}`);
}

function sayHi(name) {
  console.log(`Hello, ${name}`);
}
sayHi("Kim"); // OK! and Good
