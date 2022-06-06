{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
    peek(): string;
  }

  class Node {
    private _nextNode: Node | null = null;
    constructor(private _value: string) {}

    get value(): string {
      return this._value;
    }

    get next(): Node | null {
      return this._nextNode;
    }

    set next(nextNode: Node | null) {
      this._nextNode = nextNode;
    }
  }

  class MyStack implements Stack {
    private head: Node | null = null;
    private _size: number = 0;
    constructor(value?: string) {
      if (value) {
        this.push(value);
      }
    }

    public push(value: string) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this._size++;
    }

    public pop(): string {
      if (this.head === null) {
        throw new Error("empty stack");
      }
      const result = this.head.value;
      this.head = this.head.next;
      return result;
    }

    public peek(): string {
      if (this.head === null) {
        throw new Error("empty stack");
      }
      console.log(this.head.value);
      return this.head.value;
    }

    get size(): number {
      return this._size;
    }

    printAll() {
      for (let curr = this.head; curr !== null; curr = curr.next) {
        console.log(curr.value);
      }
      console.log("-------------");
    }
  }

  const myStack: Stack = new MyStack();
  myStack.push("a");
  // myStack.printAll();
  myStack.push("b");
  // myStack.printAll();
  myStack.push("c");
  // myStack.printAll();
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
}
