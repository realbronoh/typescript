{
  // Array
  const furits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 2, 3];

  // 함수 인자의 readonly 속성을 이용하기 위해서는
  // string[] 형태만 가능하고, Array<string>은 안된다
  function printArray(fruits: readonly string[]) {}

  // Tuple
  // 고정사이즈, 형식의 array
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  /*
    Tuple 사용 권장하지 않음
    - index로 접근 -> 가독성 떨어짐
    -> object, class, interface, type alias 로 대체 가능
   */
  // 굳이 사용하자면... destructuring 이용
  const [name, age] = student;

  // Tuple 사용례: react useState()
  // const [val, setVal] = useState(initVal);
}
