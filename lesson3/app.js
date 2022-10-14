// // function showMessage() {
// //   alert("HEllo world!");
// // }

// // showMessage();
// // var message = "Hello World!!!";

// // function showMessage() {
// //   var result = "123 " + message;
// //   alert(result);
// // }

// // showMessage();

// // console.log(message);

// // function showMessage(from, text = "текста нет") {
// //   alert(from + ":" + text);
// // }

// // showMessage("Петя", "Привет!");
// // showMessage("Вася");

// // function sum(a, b) {
// //   return a + b;
// // }

// // let result = sum(8, 12);

// // alert(result);

// // function checkAge(age) {
// //   if (age >= 18) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // var age = prompt("Сколько вам лет?");

// // if (checkAge(age)) {
// //   alert("Доступ получен");
// // } else {
// //   alert("Доступ закрыт!");
// // }

// // function doHomework(subject, callback) {
// //   alert(`выполняю работу про ${subject}`);
// //   callback();
// // }
// // function finishHomework() {
// //   alert("ГОТОВО!");
// // }

// // doHomework("математике", finishHomework);

// // var a = 2 + 3;

// // switch (a) {
// //   case 3:
// //     alert("Мало!");
// //     break;
// //   case 4:
// //     alert("Отлично!");
// //     break;
// //   case 5:
// //     alert("Много!");
// //     break;
// //   case 6:
// //     alert("Очень много!");
// //     break;
// //   default:
// //     alert("Таких значений нет!");
// // }

// // var a = 4;

// // switch (a) {
// //   case 4:
// //     alert("Верно!");
// //     break;
// //   case 3:
// //   case 5:
// //     alert("Неверно");
// //     break;
// //   default:
// //     alert("Непонятно");
// // }

// function makeCounter() {
//   var currentCount = 1;
//   return function () {
//     return currentCount++;
//   };
// }

// var counter = makeCounter();
// var counter2 = makeCounter();

// alert(counter());
// alert(counter());

// alert(counter2());
// alert(counter2());

var firstNum = document.getElementsByClassName("firstNum");
var secondNum = document.querySelector(".secondNum");

// console.log(firstNum[0]);
// console.log(secondNum);

var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");

var op;
var result;

function culck() {
  switch (op) {
    case "+":
      result = +firstNum[0].value / +secondNum.value;
      break;
    case "-":
      result = +firstNum[0].value - +secondNum.value;
      break;
  }
}

plus.addEventListener("click", function () {
  op = "+";
  culck();
  console.log(result);
  console.log(firstNum[0].value);
});

minus.addEventListener("click", function () {
  op = "-";
  culck();
  console.log(result);
});
