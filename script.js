const p1 = document.querySelector(".p1");
p1.addEventListener("click", function () {
  p1.style.backgroundColor = "red";
});

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const liTextBaru = document.createTextNode("ini adalah item baru");
  liBaru.appendChild(liTextBaru);
  ul.appendChild(liBaru);
});
