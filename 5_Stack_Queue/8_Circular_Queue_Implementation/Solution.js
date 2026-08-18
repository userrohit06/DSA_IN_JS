class CircularQueue {
  constructor(capacity) {
    this.queue = new Array(capacity);

    this.capacity = capacity;
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[this.front];
  }

  enqueue(value) {
    if (this.isFull()) return false;

    // move rear forward
    // % makes it wrap back to 0
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = value;
    this.size++;

    return true;
  }

  dequeue() {
    // queue is empty
    if (this.isEmpty()) return null;

    const value = this.queue[this.front];

    // move forward front
    // Again, % makes it circular
    this.front = (this.front + 1) % this.capacity;
    this.size--;

    return value;
  }
}
