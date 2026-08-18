class Queue {
  constructor() {
    this.queue = [];
    this.front = -1;
    this.tail = -1;
  }

  enqueue(value) {
    if (this.front === -1) this.front++;
    this.tail++;

    this.queue[this.tail] = value;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const value = this.queue[this.front];
    this.front++;

    return value;
  }

  isEmpty() {
    return this.front === -1;
  }

  peek() {
    return this.queue[this.front];
  }
}
