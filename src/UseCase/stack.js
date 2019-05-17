import { Stack, Stack2 } from "../DataStructures/Stack";

// 十进制整数转成其他进制
function mulBase(num, base) {
  const DIGITS = "0123456789ABCDEF";
  let s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num / base);
  } while (num > 0);

  let converted = "";
  while (s.length() > 0) {
    converted += DIGITS[s.pop()];
  }
  return converted;
}

// 回文判断
function isPalindrome(word) {
  word = word + "";
  let s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rword = "";
  while (s.length() > 0) {
    rword += s.pop();
  }
  return word === rword;
}
// 实现二
function isPalindrome2(word) {
  word = word + "";
  return (
    word ===
    word
      .split("")
      .reverse()
      .join("")
  );
}

// 递归演示——阶乘
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// 迭代
function fact(n) {
  let s = new Stack();
  while (n > 1) {
    s.push(n--);
  }
  let product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

// 判断一个算术表达式中的括号是否匹配;
function parenthesesChecker(symbols) {
  const stack = new Stack();
  const opens = "([{";
  const closers = ")]}";
  let balanced = true;
  let index = 0;
  let symbol;
  let top;

  while (index < symbols.length && balanced) {
    symbol = symbols[index];
    if (opens.indexOf(symbol) >= 0) {
      stack.push(symbol);
    } else if (stack.isEmpty()) {
      balanced = false;
    } else {
      top = stack.pop();
      if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
        balanced = false;
      }
    }
    index++;
  }
  return balanced && stack.isEmpty();
}

// 算术表达式中缀式转后缀式，例如"A+(B-C/D)*E" => "ABCD/-E*+" ; "A+B-C/D" => "AB+CD/-"
// 算法思路：https://blog.csdn.net/allinone99/article/details/81297098
function infix2suffix(infixExp) {
  // 判断操作符方法
  let isOperator = function(val) {
    return ["+", "-", "*", "/", "^", "(", ")"].indexOf(val) !== -1;
  };
  // 计算优先级方法
  let getPriority = function(val) {
    let result = 0;
    switch (val) {
      case "^":
        result = 3;
        break;
      case "*":
      case "/":
        result = 2;
        break;
      case "+":
      case "-":
        result = 1;
        break;
      default:
        break;
    }
    return result;
  };

  // 操作符存放栈
  let operatorStack = new Stack();
  let suffixExp = "";
  for (let i = 0; i < infixExp.length; i++) {
    const char = infixExp[i];

    if (isOperator(char)) {
      if (
        char === "(" ||
        operatorStack.length === 0 ||
        getPriority(char) > getPriority(operatorStack.peek())
      ) {
        operatorStack.push(char);
      } else if (char === ")") {
        while (!operatorStack.isEmpty()) {
          if (operatorStack.peek() === "(") {
            operatorStack.pop();
            break;
          } else {
            suffixExp += operatorStack.pop();
          }
        }
      } else {
        suffixExp += operatorStack.pop();
        operatorStack.push(char);
      }
    } else {
      suffixExp += char;
    }
  }
  // 读取完成，则将栈中剩余的运算符依次弹出到后缀表达式
  while (!operatorStack.isEmpty()) {
    suffixExp += operatorStack.pop();
  }
  return suffixExp;
}

// 佩兹糖果盒;
function pez(num) {
  // 原始糖盒
  var box = new Stack();
  // 糖的数组
  var sugars = ["红", "黄", "白"];

  // 模拟放置糖：根据数量创建糖，并且放到糖盒
  for (var i = 0; i < num; i++) {
    var random = Math.floor(Math.random() * 3);
    box.push(sugars[random]);
  }

  console.log("筛选前顺序：" + box.dataStore);

  // 辅助盒子
  var buffer = new Stack();
  // 筛选糖果
  while (box.length() > 0) {
    let sugar = box.pop();
    if (sugar !== "黄") {
      buffer.push(sugar);
    }
  }

  // 清空数据
  box.clear();

  // 筛选后糖果依次放回原盒子
  while (buffer.length() > 0) {
    let sugar = buffer.pop();
    box.push(sugar);
  }
  console.log("筛选后顺序：" + box.dataStore);
}

// 汉诺塔
function towerOfHanoi(
  plates,
  source,
  helper,
  dest,
  sourceName,
  helperName,
  destName,
  moves = []
) {
  if (plates <= 0) {
    return moves;
  }
  if (plates === 1) {
    dest.push(source.pop());
    const move = {};
    move[sourceName] = source.toString();
    move[helperName] = helper.toString();
    move[destName] = dest.toString();
    moves.push(move);
  } else {
    towerOfHanoi(
      plates - 1,
      source,
      dest,
      helper,
      sourceName,
      destName,
      helperName,
      moves
    );
    dest.push(source.pop());
    const move = {};
    move[sourceName] = source.toString();
    move[helperName] = helper.toString();
    move[destName] = dest.toString();
    moves.push(move);
    towerOfHanoi(
      plates - 1,
      helper,
      source,
      dest,
      helperName,
      sourceName,
      destName,
      moves
    );
  }
  return moves;
}

function hanoiStack(plates) {
  const source = new Stack2();
  const dest = new Stack2();
  const helper = new Stack2();

  for (let i = plates; i > 0; i--) {
    source.push(i);
  }

  return towerOfHanoi(plates, source, helper, dest, "source", "helper", "dest");
}

// function hanoi0(plates, source, helper, dest, moves = []) {
//   if (plates <= 0) {
//     return moves;
//   }
//   if (plates === 1) {
//     moves.push([source, dest]);
//   } else {
//     hanoi(plates - 1, source, dest, helper, moves);
//     moves.push([source, dest]);
//     hanoi(plates - 1, helper, source, dest, moves);
//   }
//   return moves;
// }

function hanoi(n, x, y, z, moves = []) {
  let move = function(id, from, to) {
    console.log(id + "号盘从" + from + "移动到" + to);
    moves.push([from, to]);
  };
  if (n > 0) {
    hanoi(n - 1, x, z, y, moves);
    move(n, x, z);
    hanoi(n - 1, y, x, z, moves);
  }
  return moves;
}

function testStack(params) {
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
}

export { testStack };
