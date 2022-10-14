// var number = 4;

// number = "hello";

// console.log(number);

// number string undefined NaN

// var one = 10;

// one /= 10;

// console.log(one);

// console.log(1 < 0);

// var a = "10";

// var b = 10;

// var c = 10;

// if (a === b || b === c) {
//   console.log("true!!!!!!!!!!");
// } else {
//   console.log(" :(");
// }

// var a = 2;

// console.log(Math.floor(15 / a));

// var btn = document.querySelector(".btn");
// console.log(btn);

// var a = 10;

// var c = 5;

// function numInc(number = 1, secondNum = 2) {
//   //   if (a < c) {
//   var b = (number += secondNum);
//   return b;
//   //   }
// }

// btn.addEventListener("click", () => {
//   console.log(numInc());
// });

var changeBackGround = document.body;

var hexPage = document.getElementById("hexPage");
var rgbPage = document.getElementById("rgbPage");

var hexWrapper = document.getElementById("hexWrapper");
var rgbWrapper = document.getElementById("rgbWrapper");

var hexColor = document.getElementById("hexColor");
var rgbColor = document.getElementById("rgbColor");

console.log(rgbWrapper);

hexPage.addEventListener("click", () => {
  if (hexPage.style.textDecoration != "underline") {
    hexWrapper.style.display = "block";
    rgbWrapper.style.display = "none";

    hexPage.style.textDecoration = "underline";
    rgbPage.style.textDecoration = "none";

    changeBackGround.style.background = hexColor.textContent;
  }
});

rgbPage.addEventListener("click", () => {
  if (rgbPage.style.textDecoration != "underline") {
    rgbWrapper.style.display = "block";
    hexWrapper.style.display = "none";

    rgbPage.style.textDecoration = "underline";
    hexPage.style.textDecoration = "none";
    changeBackGround.style.background = rgbColor.textContent;
  }
});

var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

console.log(hex[11]);

var randomNumberValue;

hexColor.addEventListener("click", () => {
  var hexColorValue = "#";

  for (var i = 0; i < 6; i++) {
    randomNumberValue = Math.floor(Math.random() * hex.length);
    hexColorValue += hex[randomNumberValue];
  }
  hexColor.textContent = hexColorValue;

  changeBackGround.style.background = hexColorValue;
});

rgbColor.addEventListener("click", () => {
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);

  var rgbColorValue = `rgb(${a}, ${b}, ${c})`;

  rgbColor.textContent = rgbColorValue;

  changeBackGround.style.background = rgbColorValue;
});
