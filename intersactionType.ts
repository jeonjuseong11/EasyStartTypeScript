interface Avenger {
  name: string;
}
interface Hero {
  skill: string;
}
function introduce(someone: Avenger & Hero) {
  console.log(someone.name);
  console.log(someone.skill);
}
introduce({ name: `주성`, skill: `ㅎㅎ` });
//Avenger 타입과 Hero 타입을 인터섹션 타입으로 정의했기
// 때문에 someone 파라미터에는 두 타입의 name과 skill 속성을 모두 사용할 수 있음
// 대신 두 타입의 모든 속성을 만족하는 객체를 인자로 넘겨야 함
