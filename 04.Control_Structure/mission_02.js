const loginResult = doLogin("testtest", "pwd");
console.log(loginResult);

function doLogin(id, pwd) {
  if (id ==="testtest" && pwd === "pwd") {
    return true;
  }
  return false;
}

