let input = document.getElementById("age-input");
let sain = "Sain baina uu? ";
let button = document.getElementById("submit");

button.addEventListener("click", () => {
  console.log(sain + input.value);
});
