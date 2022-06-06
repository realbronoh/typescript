{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    // readonly next: StackNode | undefined;
    readonly next?: StackNode; // StackNode | undefined;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private _head?: StackNode;
    get size() {
      return this._size;
    }

    push(value: string) {
      const node: StackNode = {
        value,
        next: this._head,
      };
      this._head = node;
      this._size++;
    }

    pop(): string {
      if (this._head == null) {
        //  엄격하지 않은(==) null로 하면 null, undefined 모두 잡을 수 있음!
        throw Error("stack is empty");
      }
      const targetNode = this._head;
      this._head = targetNode.next;
      this._size--;
      return targetNode.value;
    }
  }

  const stack = new StackImpl();
  stack.push("aaa");
  stack.push("bbb");
  stack.push("ccc");
  while (stack.size > 0) {
    console.log(stack.pop());
  }
}
