import { Queue } from "../DataStructures/Queue";
// 测试Queue类
function testQueue() {
  let q = new Queue();
  q.enqueue("baidu");
  q.enqueue("ali");
  console.log(q.toString());
  q.dequeue();
  console.log(q.toString());
}

// 方块舞的舞伴分配问题
let dancers = [
  { name: "dancer1", sex: "male" },
  { name: "dancer2", sex: "female" },
  { name: "dancer3", sex: "female" },
  { name: "dancer4", sex: "male" },
  { name: "dancer5", sex: "female" }
];

function getDancers(males, females) {
  dancers.forEach(element => {
    if (element.sex === "male") {
      males.enqueue(element);
    } else {
      females.enqueue(element);
    }
  });
}
function dance(males, females) {
  console.log("The dance partners are: \n");
  while (!males.empty() && !females.empty()) {
    console.log("Female dancer is: " + females.dequeue().name);
    console.log(" and the male dancer is: " + males.dequeue().name);
  }
}
function testDancer() {
  let maleDancers = new Queue();
  let femaleDancers = new Queue();
  getDancers(maleDancers, femaleDancers);
  dance(maleDancers, femaleDancers);
  if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
  } else {
    console.log(maleDancers.front().name + " is waiting to dance.");
  }
}
// 基数排序

export { testQueue, testDancer };
