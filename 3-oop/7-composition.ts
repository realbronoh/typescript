{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  /**
   * "Favor Composition over inheritance"
   * TypeScript에서는 하나의 상속만 가능
   * composition: 각각의 기능을 하는 class를 만들어서 class를 직접 인자로 받아 해당 기능을 사용하도록 함
   * 하지만 각각의 class들이 직접! 연결되면 좋지 않음
   */

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("steaming some milk... 🥛");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class CandySugarMixer {
    private getSugar() {
      console.log("Getting some sugar from candy... 🍭");
    }
    addSuger(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
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
    constructor(
      beans: number,
      private serialNumber: string,
      private milkFrother: CheapMilkSteamer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      // 부모 클래스의 makeCoffee() 호출
      const coffee = super.makeCoffee(shots);
      // 인자로 받은 CheapMilkSteamer의 makeMilk호출
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number, private sugarMixer: CandySugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugarMixer.addSuger(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milkFrother: CheapMilkSteamer,
      private sugarMixer: CandySugarMixer
    ) {
      super(beans);
    }
    makeCoffee(cup: number): CoffeeCup {
      const basicCoffee = super.makeCoffee(cup);
      const sugaredCoffee = this.sugarMixer.addSuger(basicCcoffee;
      return this.milkFrother.makeMilk(sugaredCoffee);
    }
  }
}
