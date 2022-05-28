{
  /*
   * Type Aliases: 새로운 타입을 정의하는 방법
   */

  type Text = string;
  const name: Text = "jinh";
  const address: Text = "korea";

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name,
    age: 12,
  };

  /*
   * String Literal Types
   */
  type Name = "name";
  let jinhName: Name;
  jinhName = "name";

  type JSON = "json";
  const json: JSON = "json";
}
