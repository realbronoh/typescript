{
  /**
   * 특정 type만 인자로 받으면 범용성이 떨어짐
   * 그렇다고 any로 설정하면 타입 체크가 안됨
   * -> generic 사용
   */

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number: number = checkNotNull(123);
  const bool: boolean = checkNotNull(false);
}
