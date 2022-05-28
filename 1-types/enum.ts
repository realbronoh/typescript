{
  /**
   * Enum
   * 여러가지 상수 정의
   */

  // JavaScript에서 하는 방법: Object.freeze()
  const DAYS_NUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
    THURSDAY: 3,
    FRIDAY: 4,
    SATURDAY: 5,
    SUNDAY: 6,
  });
  const today = DAYS_NUM.SATURDAY;
  console.log(today);

  // TypeScript
  enum Days {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
  }
  const today2 = Days.Saturday;
  console.log(today2);
  /**
   * 단 enum을 사용할 경우, 변수에 정수를 할당하면 경고, 에러 없이 정상적으로 실행된다!
   * -> enum보다는 union type 사용 권장!
   */
  type DaysByUnion =
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
}
