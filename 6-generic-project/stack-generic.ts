{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    // readonly next: StackNode | undefined;
    readonly next?: StackNode<T>; // StackNode | undefined;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private _head?: StackNode<T>;
    get size() {
      return this._size;
    }

    push(value: T) {
      const node: StackNode<T> = {
        value,
        next: this._head,
      };
      this._head = node;
      this._size++;
    }

    pop(): T {
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

  const stack = new StackImpl<string>();
  stack.push("aaa");
  stack.push("bbb");
  stack.push("ccc");
  while (stack.size > 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>();
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  while (stack2.size > 0) {
    console.log(stack2.pop());
  }
}
