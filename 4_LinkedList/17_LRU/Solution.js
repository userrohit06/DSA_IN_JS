class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    // dummy nodes
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // add node immdiately after head
  addNode(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }

  // remove a node from DLL
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // move an existing node to MRU position
  moveToFront(node) {
    this.removeNode(node);
    this.addNode(node);
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key);

    // it was just used, so make it MRU
    this.moveToFront(node);
    return node.value;
  }

  put(key, value) {
    // key already exists
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;

      // updating/using it makes it MRU
      this.moveToFront(node);

      return;
    }

    // create a new node
    const newNode = new Node(key, value);

    // store key -> value
    this.map.set(key, newNode);

    // add as most recently used
    this.addNode(newNode);

    // cache exceeded capacity
    if (this.map.size > this.capacity) {
      const lruNode = this.tail.prev;

      this.removeNode(lruNode);
      this.map.delete(lruNode.key);
    }
  }
}
