//인터페이스에서의 확장
interface Person {
  name: string;
  age: number;
}
interface Developer extends Person {
  skill: string;
}
var ju: Developer = {
  name: "주성",
  age: 24,
  skill: "웹개발",
};
//타입 별칭에서의 확장
type Person2 = {
  name: string;
  age: number;
};
type Developer2 = {
  skill: string;
};
type Ju = Person & Developer;
//인터섹션 타입으로 객체 타입을 2개 합쳐서 사용할 수 있음
var ju2: Ju = {
  name: "주성",
  age: 24,
  skill: "웹개발",
};
