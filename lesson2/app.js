// var age = prompt("Сколько тебе лет?");

// alert(`Тебе ${age} лет`);

// console.log(age);

// var sport = ["футбол", "баскетол", "плавание"];

// console.log(sport[2]);

// // function arrPush() {
// //   sport.push("бейсбол", "воллейбол");
// //   return console.log(sport[4]);
// // }

// // var btn = document.querySelector("button");

// // btn.addEventListener("click", function () {
// //   arrPush();
// // });
// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
// console.log(letters);

// letters.map(function (item, idx) {
//   console.log(idx);
// });

// var fruits = ["banana", "apple", "pinapple", "peach", "lemon", "leim"];
// console.log(fruits);

// var result = fruits.filter(function (fruit) {
//   return fruit.length >= 5;
// });

// console.log(result);

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// var result = numbers.filter(function (number) {
//   return number % 2 == 0;
// });

// console.log(result);

// var people = {
//   name: "John",
//   age: 21,
//   job: "waiter",
//   parents: {
//     name: "Peter",
//     age: "55",
//     job: "driver",
//   },
// };

// console.log(people.parents.name);

// for (var i = 0; i <= 9; i++) {
//   console.log(i);
// }

// var i = 0;

// while (i < 100) {
//   console.log(i);
//   i++;
// }

var list = document.getElementsByTagName("LI");

var i;

for (i = 0; i < list.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  list[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var allList = document.querySelector("ul");

allList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoInput").value;
  console.log(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("НАПИШИТЕ ЗАДАЧУ!!!");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  document.getElementById("todoInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var inputValue = document.getElementById("todoInput");
console.log(inputValue.value);
