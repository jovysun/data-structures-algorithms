// 基础数据用数组存储
class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  // 入栈
  push(element) {
    this.dataStore[this.top++] = element;
  }
  // 出栈
  pop() {
    return this.dataStore[--this.top];
  }
  // 获取栈顶元素
  peek() {
    return this.dataStore[this.top - 1];
  }
  // 清空
  clear() {
    this.top = 0;
    this.dataStore = [];
  }
  // 长度
  length() {
    return this.top;
  }
  // 是否为空
  isEmpty() {
    return this.top === 0;
  }
}

// 基础数据用对象存储
class Stack2 {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

// 用数组特性实现栈
class StackArray {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toArray() {
    return this.items;
  }

  toString() {
    return this.items.toString();
  }
}

export { Stack, Stack2, StackArray };
