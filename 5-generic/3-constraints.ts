{
  interface Employee {
    pay: () => void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("fulltime!");
    }
    workFullTime() {}
  }
  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time!");
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩
  function pay(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // 일반적인 generic에서 extends를 통해 제한사항을 둠
  function goodPay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  /**
   * 처음에는 workFullTime(), workPartTime() 가능하지만
   */
  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  /**
   * pay() 이후에는 불가능
   * pay()함수의 결과는 Employee이기 때문(정보 손실)
   */
  // const ellieAfterPay = pay(ellie);
  // const bobAfterPay = pay(bob);
  const ellieAfterPay = goodPay(ellie);
  const bobAfterPay = goodPay(bob);
}
