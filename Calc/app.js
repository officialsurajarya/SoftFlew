let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let output = document.getElementById("output");
let answer = document.getElementById("answer");
let c = document.getElementById("c");
let ac = document.getElementById("ac");
let add = document.getElementById("+");
let sub = document.getElementById("-");
let mul = document.getElementById("*");
let div = document.getElementById("/");
let dot = document.getElementById(".");
let pow = document.getElementById("^");
let equal = document.getElementById("=");

zero.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + zero.innerText;
});

one.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + one.innerText;
});

two.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + two.innerText;
});

three.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + three.innerText;
});

four.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + four.innerText;
});

five.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + five.innerText;
});

six.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + six.innerText;
});

seven.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + seven.innerText;
});

eight.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + eight.innerText;
});

nine.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + nine.innerText;
});

add.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + add.innerText;
});

sub.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + sub.innerText;
});

mul.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + mul.innerText;
});

div.addEventListener("click", () => {
  output.innerHTML = output.innerHTML + div.innerText;
});
