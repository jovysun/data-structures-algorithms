import { LinkedList, DoublyLinkedList } from "../DataStructures/LinkedList";
// 测试LinkedList类
function testLinkedList() {
  let linked = new LinkedList();
  linked.insert("Jack", "head");
  linked.insert("Tom", "Jack");
  linked.insert("Alex", "Tom");
  console.log(linked.toString());
}
// 测试DoublyLinkedList类
function testDoublyLinkedList() {
  let linked = new DoublyLinkedList();
  linked.insert("Jack", "head");
  linked.insert("Tom", "Jack");
  linked.insert("Alex", "Tom");
  console.log(linked.toString());
  linked.dispReverse();
  console.log(linked.toString());
}
export { testLinkedList, testDoublyLinkedList };
