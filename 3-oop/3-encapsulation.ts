{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  /**
   * public(default): 외부에서 접근 가능
   * private: 해당 class 내부에서만 접근 가능
   * protected: 해당 class + 상속받은 class 내부에서서 접근 가능
   */
  class CoffeeMaker {
    // static: class level -> 모든 인스턴스가 공유함(메모리 아낌)
    private static BEANS_GRAM_PER_SHOT: number = 7;
    // instance level
    private coffeeBeans: number = 0;

    // constructor()를 통해서 instacne 생성 제한 -> static 함수 이용하도록 함
    private constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    // static: class level
    static makeMachine(coffeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeBeans);
    }

    // 내부 변수는 private이므로
    // api를 통해 접근 가능하도록 제한
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
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
  // const maker = new CoffeeMaker(70);
  const maker = CoffeeMaker.makeMachine(70);
  maker.fillCoffeeBeans(30);
}
