class Queue {
  constructor() {
    this.store = [];
  }
  enqueue(element) {
    this.store.push(element);
  }
  dequeue() {
    return this.store.shift();
  }
  front() {
    return this.store[0];
  }
  back() {
    return this.store[this.store.length - 1];
  }
  toString() {
    return this.store.join(",");
  }
  empty() {
    return this.store.length === 0;
  }
}

export { Queue };
