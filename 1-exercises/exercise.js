/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/
console.log("hello world");
/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

console.log(document.querySelectorAll("p"));
const allPs = document.querySelectorAll("p");
for (const aP of allPs) {
  console.log(aP.innerText);
}
console.log(document.querySelector("div"));
console.log(document.querySelector("#jumbotronText"));
console.log(document.querySelectorAll(".primary-content p"));
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
function makeRed(event) {
  event.preventDefault();
  document.querySelector("body").classList.toggle("background--red");
}

const changeColorBtn = document.querySelector("#bgrChangeBtn");
changeColorBtn.addEventListener("click", makeRed);

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
function makeBigger() {
  let allLinks = document.querySelectorAll("a");
  for (const aLink of allLinks) {
    aLink.classList.toggle("larger");
  }
}

const largerLinks = document.querySelector("#largerLinksBtn");
largerLinks.addEventListener("click", makeBigger);

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

function addText(event) {
  event.preventDefault();
  const captureText = document.querySelector("#addArticleInput").value;
  const aLine = document.createElement("p");
  aLine.innerText = captureText;
  const articleSpace = document.querySelector("#addArticle");
  articleSpace.appendChild(aLine);
}

const addTextBtn = document.querySelector("#addArticleBtn");
addTextBtn.addEventListener("click", addText);

