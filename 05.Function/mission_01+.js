/*
  로그인 기능을 수행하는 함수를 구현하시오.
  주어진 `존재하는_id, 존재하는_pwd`에 맞게 로그인이 되어야 함.
  매개변수: id, pwd
  결과: boolean(true, false) 값
*/

const 존재하는_id = "test";
const 존재하는_pwd = "pwd";

let loginResult = false;

// TODO: 함수 구현
function doLogin(id, pwd) {
  if (id === 존재하는_id && pwd === 존재하는_pwd) {
    return true;
  }
  return false;
}
loginResult = doLogin(존재하는_id, 존재하는_pwd);

console.log(loginResult);
