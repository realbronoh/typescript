{
  /**
   * Type Assertions 💩
   */

  // js 함수는 모두 any타입이라서 확인 필요
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // jsStrFunc()는 any타입을 return하지만
  // string이라는 것을 알고있는 상황
  // string method를 못쓰기때문에
  // result를 string type으로 casting해준다!
  // String.length 사용 가능!
  (result as string).length;
  (<string>result).length;

  // 하지만 잘못 assertion하면
  // ts에서는 넘어가주지만
  // 실제 runtime에서는 에러 발생 가능!!
  // 따라서 정말 장담하지 않는다면 사용 x

  // !
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // numbers는 undefined일 수도 있어서
  // push()를 사용하면 경고하지만
  // !를 붙이면 확실하다고 장담하는 것!
  numbers!.push(2);
  // 다른 예시: 뒤에 !를 붙이는 것도 가능
  // querySelector()는 E | null 반환하지만
  // 정말 확실하다고 선언
  const button = document.querySelector("my-lass")!;
}
