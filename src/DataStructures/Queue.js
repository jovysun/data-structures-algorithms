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
// 优先队列：假如规定数值越小优先级越高
class PriorityQueue {
  constructor() {
    this.store = [];
  }
  enqueue(element) {
    this.store.push(element);
  }
  dequeue() {
    let entry = 0;
    this.store.forEach((element, index) => {
      if (element.code < this.store[entry].code) {
        entry = index;
      }
    });
    return this.store.splice(entry, 1);
  }
  front() {
    return this.store[0];
  }
  back() {
    return this.store[this.store.length - 1];
  }
  toString() {
    let result = "";
    this.store.forEach(element => {
      result += element.name + " code: " + element.code + "\n";
    });
    return result;
  }
  empty() {
    return this.store.length === 0;
  }
}

export { Queue, PriorityQueue };
