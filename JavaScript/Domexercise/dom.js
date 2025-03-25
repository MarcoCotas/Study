const container = document.querySelector("#container");
const redParagraph = document.createElement("p");
const heading3 = document.createElement("h3");
const mainDiv = document.createElement("div");
const heading1 = document.createElement("h1");
const paragraph = document.createElement("p");

redParagraph.classList.add("red-paragraph");
redParagraph.textContent = "This is a red-paragraph";
heading3.textContent = "I'm a blue h3!";
heading1.textContent = "Im in a div";
paragraph.textContent = "ME TOO!";

redParagraph.style.color = "red";
heading3.style.color = " blue";
mainDiv.style.border = "2px solid black";
heading1.style.color = "black";
paragraph.style.color = "black";

container.appendChild(redParagraph);
container.appendChild(heading3);
mainDiv.appendChild(heading1);
mainDiv.appendChild(paragraph);
container.appendChild(mainDiv);
