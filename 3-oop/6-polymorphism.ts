{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    // static: class level -> 모든 인스턴스가 공유함(메모리 아낌)
    private static BEANS_GRAM_PER_SHOT: number = 7;
    // instance level
    private coffeeBeans: number = 0;

    // constructor()를 통해서 instacne 생성 제한 -> static 함수 이용하도록 함
    public constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    // // static: class level
    // static makeMachine(coffeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeBeans);
    // }

    // 내부 변수는 private -> api를 통해 접근 가능하도록 제한
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots} shots...`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots..`);
      return {
        shots,
        hasMilk: false,
      };
    }
    clean() {
      console.log(`cleaning machine...`);
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeeLatteMachine extends CoffeeMachine {
    // 추가적으로 constructor()를 만드려면
    // super()로 부모클래스의 생성자를 호출해야함
    constructor(beans: number, private milk: number) {
      super(beans);
    }
    private steamMilk(): void {
      if (this.milk <= 0) {
        throw new Error("not enough milk");
      }
      this.milk -= 1;
      console.log("steaming milk...🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      // 부모 클래스의 makeCoffee() 호출
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  // CoffeeMaker interface로 제한 가능
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(20),
    new CaffeeLatteMachine(30, 10),
    new SweetCoffeeMachine(20),
    new CoffeeMachine(50),
    new CaffeeLatteMachine(20, 10),
    new SweetCoffeeMachine(30),
  ];

  // 각각 다른 class이지만 공통 api를 사용할 수 있다.
  // 하나의 interface 혹은 부모 class에 구현된 함수를
  // 동일한 이름으로 다른 기능을 하도록 만들 수 있음
  machines.forEach((machine: CoffeeMaker) => {
    console.log("------------");
    machine.makeCoffee(2);
  });
}
