{
  // either: a or b
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
      return this.leftValue;
    }
    right(): R {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(1, 3);
  console.log(either.left());
  console.log(either.right());
  const newEither = new SimpleEither({ test: "test" }, "test");
}
