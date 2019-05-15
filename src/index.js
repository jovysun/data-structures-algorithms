import { testStack } from "./UseCase/stack";
import { testQueue, testDancer, testPriorityQueue } from "./UseCase/queue";
import { testLinkedList, testDoublyLinkedList } from "./UseCase/linkedlist";

// 栈++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("测试 Stack类...");
testStack();
// 队列++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("测试 Queue类...");
testQueue();
console.log("测试方块舞...");
testDancer();
console.log("测试优化队列：候诊室...");
testPriorityQueue();

// 链表++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("测试 LinkedList类...");
testLinkedList();
console.log("测试 DoublyLinkedList类...");
testDoublyLinkedList();
