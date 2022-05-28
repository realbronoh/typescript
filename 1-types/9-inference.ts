{
  /**
   * Type Inference
   * 명확한 경우 TypeScript가 자동으로 type을 추론해주지만
   * 웬만하면 직접 명시해서 가독성을 높일것!
   */

  // 선언과 동시에 할당 -> text: string이라고 타입 추론
  let text = "hello";

  // 함수 인자로 타입을 명시하지 않으면
  // any 타입으로 추론 -> ...으로 경고
  function print(message) {
    console.log(message);
  }

  // 함수 인자로 default를 지정하면 타입 추론
  function hello(message = "hello") {
    console.log(message);
  }

  // 함숫값의 타입을 자동으로 추론
  // num1, num2 모두 number이므로 add()도 number
  function add(num1: number, num2: number) {
    return num1 + num2;
  }
  // 또한 함숫값을 변수에 할당하면 그 변수도 type 추론
  const result = add(1, 2);
}
