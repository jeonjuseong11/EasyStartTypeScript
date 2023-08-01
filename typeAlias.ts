type MyName = string;
//타입 별칭 사용 전
var Ju: string = "주성";
//타입 별칭 사용 후
var Ju2: MyName = "주성";
//장점 : 반복되는 타입 코드를 줄일 수 있음
function logText1(text: string | number) {
  //…
}
var message: string | number = "안녕하세요";
logText1(message);

type MyMessage = string | number;
function logText2(text: MyMessage) {
  //…
}
var message: MyMessage = "안녕하세요";
logText2(message);
