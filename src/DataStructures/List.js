class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 初始化一个空数组来保存列表元素
  }
  append(element) {
    this.dataStore[this.listSize++] = element;
  }
  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }
  remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      this.listSize--;
      return true;
    }
    return false;
  }
  lenth() {
    return this.listSize;
  }
  toString() {
    return this.dataStore;
  }
  insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }
  clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
  }
  contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }
  front() {
    this.pos = 0;
  }
  end() {
    this.pos = this.listSize - 1;
  }
  prev() {
    this.pos--;
  }
  next() {
    this.pos++;
  }
  currPos() {
    return this.pos;
  }
  moveTo(position) {
    this.pos = position;
  }
  getElement() {
    return this.dataStore[this.pos];
  }
  hasNext() {
    return this.pos < this.listSize;
  }
  hasPrev() {
    return this.pos >= 0;
  }
}

export { List };
