class Chatgpt {
  constructor(name) {
    this.name = name; //타입 에러 발생
  }

  sum(a, b) {
    return a + b;
  }
}

var gpt = new Chatgpt("대화형 AI");
gpt.sum(10, 20);

class Chatgpt2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sum(a: number, b: number): number {
    return a + b;
  }
}
//접근 제어자 public
class WaterPurifier {
  public waterAmount: number;

  constructor(waterAmount: number) {
    this.waterAmount = waterAmount;
  }

  public wash() {
    if (this.waterAmount > 0) {
      console.log("정수기 동작 성공");
    }
  }
}
//private

class Person {
  private name2: string;
  private skill: string;

  constructor(name2: string, skill: string) {
    this.name2 = name;
    this.skill = skill;
  }

  private sayHi() {
    console.log("hi");
  }
}
//protected
class WaterPurifier2 {
  #waterAmount: number;

  constructor(amount: number) {
    this.#waterAmount = amount;
  }

  public wash() {
    if (this.#waterAmount > 0) {
      console.log("정수기 동작 성공");
    }
  }
}
var purifier = new WaterPurifier2(30);
purifier.wash(); //정수기 동작 성공
purifier.#waterAmount = 0;
purifier.wash(); //정수기 동작 성공
