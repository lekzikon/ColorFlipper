const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const colorChange = getRandNum();

  document.body.style.backgroundColor = colors[colorChange];
  color.textContent = colors[colorChange];
});

function getRandNum() {
  return Math.floor(Math.random() * colors.length);
}
