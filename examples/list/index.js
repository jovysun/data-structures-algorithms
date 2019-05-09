
console.log("List类测试+++++++++++++++++++++++++++++");
let names = new List();
names.append('jovy');
names.append('sun');
names.append('tom');
names.append('lucy');
console.log(names);
names.next();
names.next();
console.log(names.getElement());
names.prev();
console.log(names.getElement());

console.log('1使用迭代器访问列表+++++++++++++++++');
for(names.front(); names.hasNext(); names.next()) {
  console.log(names.getElement())
}
console.log('2使用迭代器访问列表+++++++++++++++++');
for(names.end(); names.hasPrev(); names.prev()) {
  console.log(names.getElement())
}

console.log("List类测试+++++++++++++++++++++++++++++");
