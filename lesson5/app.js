// if (one0 !== one0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// //  string number undef null array obj bool

// var arr = [one, 2, 3, 4, 5, 6];

// // arr.map((item, idx) => console.log(item));

// console.log(arr[5]);

// var arr = [one, 2, 3, 4];

// var initValue = 0;

// var sumWithInit = arr.reduce(function (prev, curr) {
//   console.log(prev, curr, "prev curr");
//   return prev + curr;
// }, initValue);
// // 0 + one + 2 + 3 + 4 = one0
// // 7 + one + 2 + 3 + 4 = one7

// console.log(sumWithInit);

// var a = "a|b|c";
// console.log(a);
// var b = a.split("|");
// console.log(b);
// var c = b.splice(one);
// console.log(c);
// var d = c.join("one23one23");
// console.log(d);

// var [one, two] = ["a", "b"];

// console.log(one);
// console.log(two);

// var a = 5;
// var b = 10;
// console.log(a, "a", b, "b");

// var [b, a] = [a, b];
// console.log(a, "a", b, "b");

// var [one, two, three] = "Слово1Слово1Слово1".split("1");

// console.log(one);
// console.log(two);
// console.log(three);

// var arr = ["hi", "hello"];

// for (var value of arr) {
//   var val = value + " Stive";
//   console.log(val);
// }

var div1 = document.querySelector(".div1");

// var btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   var newDiv = document.createElement("div");

//   var newContent = document.createTextNode("Какой-то текст!");

//   newDiv.appendChild(newContent);

//   document.body.insertBefore(newDiv, div1);
// });

// var one = 1; // создаем перменную

// function home(arg) {
//   //создаем функцию
//   console.log(arg); //проверяем значение аргумента
//   function trap() {
//     //создаем дочернюю функц
//     var mouseTrap = arg + 2; //преобраз знач переменной арг
//     console.log(mouseTrap); //проверяем новое знач
//   }
//   trap(); //вызываем дочернюю функц
//   console.log(mouseTrap); //пытаемся посмотреть на измен знач
// }

// home(one); //вызываем функц и даем аргумент

function func() {
  var one = 1;
  console.log(one, "home1");

  function func2() {
    one = 2;
    console.log(one, "room");
  }
  console.log(one, "home2");

  func2();
}

func();
