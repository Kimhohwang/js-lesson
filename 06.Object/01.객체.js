function viewObject(object) {
  for (const key in object) {
    console.log(`${key}: ${object[key]}`);
  }
}

const user = {
  name: "Kim",
  age: 30,
  isAdmin: true,
};

// viewObject(user);

// 값 추가
user.email = "kim@naver.com";
// viewObject(user);

// 값 수정
user.age = 19;
// viewObject(user);
