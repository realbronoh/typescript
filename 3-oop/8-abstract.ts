{
  /**
   * Abstract class는 new를 통해 instance를 만들 수 없다
   * Abscract method는 선언만, 구현은 하위 클래스에서;
   * 추상 클래스
   *
   */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

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

    // abstract method는 선언만 하고 하위 클래스에서 구현해야 함!
    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeeLatteMachine(30, 10),
    new SweetCoffeeMachine(20),
    new CaffeeLatteMachine(20, 10),
    new SweetCoffeeMachine(30),
  ];

  machines.forEach((machine: CoffeeMaker) => {
    console.log("------------");
    machine.makeCoffee(2);
  });
}
