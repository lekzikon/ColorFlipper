const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let firstItem = "#";
  for (let i = 0; i < 6; i++) {
    firstItem += hex[getRandNum()];
  }

  color.textContent = firstItem;
  document.body.style.backgroundColor = firstItem;
});

function getRandNum() {
  return Math.floor(Math.random() * hex.length);
}
