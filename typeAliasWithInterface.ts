interface Person {
  name: string;
  age: number;
}

type Adult = {
  old: Boolean;
};
type Teacher = Person & Adult;
