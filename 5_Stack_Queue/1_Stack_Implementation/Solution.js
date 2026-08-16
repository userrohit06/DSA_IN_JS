class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(value) {
    this.top++;
    this.items[this.top] = value;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    const value = this.items[this.top];
    this.top--;

    return value;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }
}
