{
  // Javascript
  // let & const: es6

  // Primitive: number, string, boolean, bigint, symbol, null, undefined
  // Object: function, array...

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = true;

  // undefined: 비었는지 값이 없는지 불확실
  // 보통 null보다 보편적으로 사용함
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null 💩: 값이 확실하게 없을때
  let person: string | null;

  // unknown 💩
  // js 라이브러리를 쓸대 쓰는듯
  let notSure: unknown = 0;
  // any 💩
  let anything: any = 0;

  // void
  // 함수에서 아무것도 반환하지 않을때
  function print(): void {
    return;
  }

  // never
  // 리턴하지 않는 함수
  function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
  }
  function infiniteLoop(): never {
    while (true) {}
  }

  // object 💩
  // 어떤 타입의 데이터든 담을 수 있다(모든 오브젝트)
  let obj: object;
  function accceptObject(obj: object) {}
}
