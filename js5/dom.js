let num1 = document.getElementById("num1-input");
let num2 = document.getElementById("num2-input");
let plusbutton = document.getElementById("plus");

plusbutton.addEventListener("click", () => {
  console.log(parseInt(num1.value) + parseInt(num2.value));
});

let num3 = document.getElementById("num3-input");
let num4 = document.getElementById("num4-input");
let hasahbutton = document.getElementById("hasah");

hasahbutton.addEventListener("click", () => {
  console.log(parseInt(num3.value) - parseInt(num4.value));
});

let num5 = document.getElementById("num5-input");
let num6 = document.getElementById("num6-input");
let urjihbutton = document.getElementById("urjih");

urjihbutton.addEventListener("click", () => {
  console.log(parseInt(num5.value) * parseInt(num6.value));
});

let num7 = document.getElementById("num7-input");
let num8 = document.getElementById("num8-input");
let huvaahbutton = document.getElementById("huvaah");

huvaahbutton.addEventListener("click", () => {
  console.log(parseInt(num7.value) / parseInt(num8.value));
});

let num9Input = document.getElementById("num9-input");
let num10Input = document.getElementById("num10-input");
let num11Input = document.getElementById("num11-input");
let Minbutton = document.getElementById("Min");

Minbutton.addEventListener("click", () => {
  let num9 = parseInt(num9Input.value);
  let num10 = parseInt(num10Input.value);
  let num11 = parseInt(num11Input.value);
  if (num9 < num10) {
    if (num9 < num11) {
      console.log(num9);
    } else {
      console.log(num11);
    }
  } else {
    if (num11 < num10) {
      console.log(num11);
    } else {
      console.log(num10);
    }
  }
});

let num12Input = document.getElementById("num12-input");
let num13Input = document.getElementById("num13-input");
let num14Input = document.getElementById("num14-input");
let Averagebutton = document.getElementById("Average");

Averagebutton.addEventListener("click", () => {
  console.log(
    (parseInt(num12Input.value) +
      parseInt(num13Input.value) +
      parseInt(num14Input.value)) /
      3
  );
});
