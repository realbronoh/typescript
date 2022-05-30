{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  class CoffeeMaker {
    // static: class level -> 모든 인스턴스가 공유함(메모리 아낌)
    static BEANS_GRAM_PER_SHOT: number = 7;
    // instance level
    coffeeBeans: number = 0;

    constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    // static: class level
    static makeMachine(coffeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // constructor를 통해 직접 instance 생성
  const maker = new CoffeeMaker(70);
  // class level의 static함수를 통해 instance 생성
  const maker2 = CoffeeMaker.makeMachine(30);
  // ex) Math 모듈의 경우 직접 instance 생성 안해도 property, methods 이용 가능
  const PI = Math.PI;
  console.log(maker);
}
