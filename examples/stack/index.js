
console.log('Stack类测试+++++++++++++++++++++++++++++')
let s = new Stack();
s.push("ali");
s.push("baidu");
s.push("tengxun");
console.log(s.length());
let poped = s.pop();
console.log(poped);
console.log(s.length());
let peeked = s.peek();
console.log("peeked: " + peeked);

console.log("Stack类测试+++++++++++++++++++++++++++++");



// 十进制整数转成任何进制
function mulBase(num, base){
  const DIGITS = '0123456789ABCDEF';
  let s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num / base);
  } while (num > 0);

  let converted = '';
  while (s.length() > 0) {
    converted += DIGITS[s.pop()];
  }
  return converted;
}

// console.log(mulBase(100345, 2)); // 11000011111111001
// console.log(mulBase(100345, 8)); // 303771
// console.log(mulBase(100345, 16)); // 187F9
// console.log(mulBase(5, 2)); // 101

// 回文判断
function isPalindrome(word) {
  let s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rword = '';
  while (s.length() > 0) {
    rword += s.pop();
  }
  return word === rword;
}
// 实现二
function isPalindrome2(word) {
  word = word + '';
  return word === word.split('').reverse().join('');
}

// console.log('hello: ' + isPalindrome('hello'));
// console.log('racecar: ' + isPalindrome('racecar'));
// console.log('1001: ' + isPalindrome(1001));

// console.log('hello: ' + isPalindrome2('hello'));
// console.log('racecar: ' + isPalindrome2('racecar'));
// console.log('1001: ' + isPalindrome2(1001));
// hello: false
// racecar: true
// 1001: false
// hello: false
// racecar: true
// 1001: true

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

console.log('factorial: ' + factorial(5));
console.log('fact: ' + fact(5));
// factorial: 120
// fact: 120


// 练习一
console.log('判断一个算术表达式中的括号是否匹配++++++++++++++++++++')
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

console.log('{([])}', parenthesesChecker('{([])}')); // true
console.log('{{([][])}()}', parenthesesChecker('{{([][])}()}')); // true
console.log('[{()]', parenthesesChecker('[{()]')); // false

console.log("佩兹糖果盒++++++++++++++++++++");
//糖的数量
var num=20;
//创建糖盒
var box = new Stack();
//糖的数组
var sugars=['红','黄','白'];
//根据数量创建糖，并且放到糖盒
for(var i=0;i<num;i++){
    var random = Math.floor(Math.random()*3);
    box.push(sugars[random]);
}

//糖的顺序
box.forEach(function (sugar) {
    console.log(sugar);
})

//糖的缓存
var buffer = new Stack();

box.forEach(function (sugar) {
    if(sugar!='黄'){
        buffer.push(sugar);
    }
})

//清空栈内的数据
box.clear();

//遍历未筛选糖
buffer.forEach(function (sugar) {
    box.push(sugar);
})

console.log("*************************************");

//遍历筛选后的糖
box.forEach(function (sugar) {
    console.log(sugar);
})

console.log("汉诺塔++++++++++++++++++++");
