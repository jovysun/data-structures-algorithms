import {
  mulBase,
  isPalindrome,
  isPalindrome2,
  factorial,
  fact,
  parenthesesChecker,
  pez,
  infix2suffix,
  hanoi,
  hanoiStack
} from "./UseCase/stack";
import { testQueue, testDancer, testPriorityQueue } from "./UseCase/queue";

// 十进制整数转成任何进制;
console.log("十进制整数转成任何进制:");
console.log("100345转二进制：" + mulBase(100345, 2)); // 11000011111111001
console.log("100345转八进制：" + mulBase(100345, 8)); // 303771
console.log("100345转十六进制：" + mulBase(100345, 16)); // 187F9
console.log("5转二进制：" + mulBase(5, 2)); // 101

// 回文判断
console.log("回文判断:");
console.log("hello: " + isPalindrome("hello"));
console.log("racecar: " + isPalindrome("racecar"));
console.log("1001: " + isPalindrome(1001));

console.log("hello: " + isPalindrome2("hello"));
console.log("racecar: " + isPalindrome2("racecar"));
console.log("1001: " + isPalindrome2(1001));

// 递归演示——阶乘
console.log("阶乘转迭代:");
console.log("5阶乘: " + factorial(5));
console.log("5阶乘的迭代实现: " + fact(5));

// 判断一个算术表达式中的括号是否匹配;
console.log("判断一个算术表达式中的括号是否匹配++++++++++++++++++++");
console.log("{([])}", parenthesesChecker("{([])}")); // true
console.log("{{([][])}()}", parenthesesChecker("{{([][])}()}")); // true
console.log("[{()]", parenthesesChecker("[{()]")); // false
// 佩兹糖果盒;
console.log("佩兹糖果盒：");
pez(20);
// 算术表达式中缀式转后缀式;
console.log("算术表达式中缀式转后缀式：");
let exp1 = "A+(B-C/D)*E";
let exp2 = "a+b*c+(d*e+f)*g";
let exp3 = "A+B-C/D";
console.log(exp1 + " => " + infix2suffix(exp1));
console.log(exp2 + " => " + infix2suffix(exp2));
console.log(exp3 + " => " + infix2suffix(exp3));

// 汉诺塔;
console.log("汉诺塔：");
console.log(hanoiStack(3));
console.log(hanoi(3, "A", "B", "C"));

// 队列++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("测试 Queue类...");
testQueue();
console.log("测试方块舞...");
testDancer();
console.log("测试优化队列：候诊室...");
testPriorityQueue();
