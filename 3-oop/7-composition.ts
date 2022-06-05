{
  /**
   * "Favor Composition over inheritance"
   * TypeScript에서는 하나의 상속만 가능
   * composition: 각각의 기능을 하는 class를 만들어서 class를 직접 인자로 받아 해당 기능을 사용하도록 함
   * 하지만 각각의 class들이 직접! 연결되면 좋지 않음
   * -> class들끼리는 interface로 소통해야함(de-coupling)
   */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // Milk
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  class CheapMilkSteamer implements MilkFrother {
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
  class FancyMilkSteamer implements MilkFrother {
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
  class ColdMilkSteamer implements MilkFrother {
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
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log("no milk!");
      return cup;
    }
  }

  // Sugar
  interface SugarProvider {
    addSuger(cup: CoffeeCup): CoffeeCup;
  }
  class CandySugarMixer implements SugarProvider {
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
  class JarSugarMixer implements SugarProvider {
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
  class NoSugar implements SugarProvider {
    addSuger(cup: CoffeeCup): CoffeeCup {
      console.log("no sugar!");
      return cup;
    }
  }

  // CoffeeMaker
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  class CoffeeMachine implements CoffeeMaker {
    // static: class level -> 모든 인스턴스가 공유함(메모리 아낌)
    private static BEANS_GRAM_PER_SHOT: number = 7;
    // constructor()를 통해서 instacne 생성 제한 -> static 함수 이용하도록 함
    public constructor(
      private coffeeBeans: number,
      private milkFrother: MilkFrother,
      private sugarProvider: SugarProvider
    ) {}
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
      const coffee = this.extract(shots);
      const sugaredCoffee = this.sugarProvider.addSuger(coffee);
      return this.milkFrother.makeMilk(sugaredCoffee);
    }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugarMixer = new CandySugarMixer();
  const jarSugarMixer = new JarSugarMixer();
  const noSugar = new NoSugar();

  // sweetMachines
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugarMixer);
  const sweetMachine = new CoffeeMachine(12, noMilk, jarSugarMixer);

  // latteMachine
  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const fancyLatteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMakerm, noSugar);
  const sweetCaffeLatteMachine = new CoffeeMachine(
    12,
    cheapMilkMaker,
    candySugarMixer
  );
}
