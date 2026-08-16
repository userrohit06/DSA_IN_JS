class MinStack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(value) {
    if (this.top === -1) {
      this.top++;
      this.items[this.top] = { value, min: value };
      return;
    }

    const lastTop = this.items[this.top];

    this.top++;

    if (lastTop.value < value) {
      this.items[this.top] = { value, min: lastTop.value };
    } else {
      this.items[this.top] = { value, min: value };
    }
  }

  pop() {
    const valueObj = this.items[this.top];
    this.top--;

    return valueObj;
  }

  getTop() {
    return this.items[this.top].value;
  }

  getMin() {
    return this.items[this.top].min;
  }
}

const minStack = new MinStack();

minStack.push(10);
minStack.push(20);
minStack.push(4);
minStack.push(110);
minStack.push(8);
minStack.push(1);
minStack.push(1);
minStack.pop();

console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getTop());
