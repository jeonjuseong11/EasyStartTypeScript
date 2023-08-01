interface Person {
  name: string;
  age: number;
}
interface Developer {
  name: string;
  skill: string;
}
function introduce(someone: Person | Developer) {
  console.log(someone.age);
  //Developer 형식에 age 속성 없음
  console.log(someone.skill);
  //Person 형식에 skill 속성이 없음
}
//in 연산자
function introduce(someone: Person | Developer) {
  if ("age" in someone) {
    console.log(someone.age);
    return;
  }
  if ("skill" in someone) {
    console.log(someone.skill);
    return;
  }
}

//typeof 연산자
function logText(text: string | number) {
  if (typeof text === "string") {
    console.log(text.toUpperCase());
  }
  if (typeof text === "number") {
    console.log(text.toLocaleString());
  }
}
