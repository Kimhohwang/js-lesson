let a1 = 10;
let a2 = 30;
const operator = "+";

const isAisNumber = typeof a1 == "number" && typeof a2 == "number";
const isOperatorValid = operator == "+" || operator == "*" || operator == "%";

if (!isAisNumber && !isOperatorValid) {
  console.log(null);
} else {
  if (operator == "+"){
    console.log(result = a1 + a2);
  } else if (operator == "%") {
    console.log(result = a1 % a2);
  } else if (operator == "*") {
    console.log(result = a1 * a2);
  }
}

console.log(result);

console.log(typeof operator);