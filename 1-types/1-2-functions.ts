{
  // JavaScript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  // function jsFetchNum(id) {
  //   /* ... */
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // TypeScript ✨
  function fetchNum(id: string): Promise<number> {
    /* ... */
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript 최신문법 => TypeScript

  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    lastName && console.log(lastName);
  }

  printName("jinh");
  printName("jinh", "noh");
  printName("jinh", undefined);

  // Default parameter
  function printMessage(message: string = "DEFAULT_MESSAGE") {
    console.log(message);
  }

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
}
