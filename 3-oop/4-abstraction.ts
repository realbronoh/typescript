{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 명세서, 약속
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // CoffeeMachine class는 CoffeeMaker interface를 따라야 함
  // 모든 것을 구현해야 함
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // static: class level -> 모든 인스턴스가 공유함(메모리 아낌)
    private static BEANS_GRAM_PER_SHOT: number = 7;
    // instance level
    private coffeeBeans: number = 0;

    // constructor()를 통해서 instacne 생성 제한 -> static 함수 이용하도록 함
    private constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    // static: class level
    static makeMachine(coffeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeBeans);
    }

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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      console.log("amateur coffee");
      const coffee = this.machine.makeCoffee(1);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      console.log("pro barista coffee");
      this.machine.fillCoffeeBeans(10);
      const coffee = this.machine.makeCoffee(1);
      this.machine.clean();
    }
  }

  // 똑같은 CoffeeMachine을 받아오지만
  const maker = CoffeeMachine.makeMachine(100);
  const amateur: AmateurUser = new AmateurUser(maker);
  const barista: ProBarista = new ProBarista(maker);

  // 다른 api를 사용한다(받아올때 interface로 다르게 받아왔으므로)
  amateur.makeCoffee();
  console.log("------------");
  barista.makeCoffee();
  // 따라서 class를 사용할때 적절한 interface를 설정하면
  // class의 모든 복잡한 것을 모르게 편하게 쓰고싶은 것만 사용할 수 있다(abstraction & encapsulation)
}
