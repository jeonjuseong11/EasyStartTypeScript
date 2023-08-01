//	동일한 이름으로 인터페이스를 선언하면 인터페이스 내용을 합치는 특성
interface PersonMerging {
  name: string;
  age: number;
}
interface PersonMerging {
  address: string;
}
var juseong: PersonMerging = {
  name: "주성",
  age: 24,
  address: "김포",
};
// 실제로 적용되는 인터페이스
// interface Person {
//   name: string;
//   age: number;
//   address: string;
// }
