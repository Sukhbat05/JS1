let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let plusBtn = document.getElementById("plusBtn");

plusBtn.addEventListener("click", () => {
  let number1 = num1.value;
  let number2 = num2.value;
  let numberNumber1 = parseInt(number1);
  let numberNumber2 = parseInt(number2);
  document.getElementById("answer").innerText = numberNumber1 + numberNumber2;
});

let too = 100;

while (too > 0) {
  if (too % 2 === 0) {
    console.log(too);
  }
  too = too - 1;
}
