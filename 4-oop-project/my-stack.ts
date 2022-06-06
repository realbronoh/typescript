{
  /**
   * stack 구현
   */
  interface Stack {
    push(num: number): void;
    pop(): number;
    isEmpty(): boolean;
    peek(): number;
  }

  class MyStack implements Stack {
    private stack: number[];
    private EMPTY_ERROR = new Error("stack is empty");

    constructor() {
      this.stack = [];
    }

    public isEmpty(): boolean {
      if (this.stack.length === 0) {
        return true;
      }
      return false;
    }

    public peek(): number {
      if (this.isEmpty) {
        throw this.EMPTY_ERROR;
      }
      return this.stack[this.stack.length - 1];
    }

    public push(num: number): void {
      this.stack = [...this.stack, num];
    }

    public pop(): number {
      if (this.isEmpty) {
        this.EMPTY_ERROR;
      }
      const top = this.peek();
      this.stack = this.stack.slice(0, this.stack.length - 1);
      return top;
    }
  }
}
