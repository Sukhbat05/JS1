const red = document.createElement("div");
const blue = document.createElement("div");
const body = document.querySelector("body");

body.appendChild(red);
body.appendChild(blue);

red.classList.add("red");
blue.classList.add("blue");

red.style.width = "50%";
blue.style.width = "50%";
// red.addEventListener("keydown", () => {
//   red.style.width = parseInt(red.style.width) + 1 + "%";
//   blue.style.width = parseInt(blue.style.width) - 1 + "%";
// });

document.addEventListener("keydown", (event) => {
  if (KeyF) {
    red.style.width = parseInt(red.style.width) + 1 + "%";
    blue.style.width = parseInt(blue.style.width) - 1 + "%";
  }
});

// // blue.addEventListener("keyup", () => {
// //   console.log(blue);
// //   blue.style.width = parseInt(blue.style.width) + 1 + "%";
// //   red.style.width = parseInt(red.style.width) - 1 + "%";
// // });
document.addEventListener("keyup", (event) => {
  blue.style.width = parseInt(blue.style.width) + 1 + "%";
  red.style.width = parseInt(red.style.width) - 1 + "%";
});
