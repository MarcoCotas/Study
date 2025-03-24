const container = document.querySelector("#container");
const redParagraph = document.createElement("p");
const heading3 = document.createElement("h3");

redParagraph.classList.add("red-paragraph");
redParagraph.textContent = "This is a red-paragraph";
heading3.textContent = "I'm a blue h3!";

container.appendChild(redParagraph);
container.appendChild(heading3);

redParagraph.style.color = "red";
heading3.style.color = " blue";
