/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

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
const allParagraphElements = document.querySelectorAll("p");
console.log(allParagraphElements);
for (const allP of allParagraphElements) {
  console.log(allP.innerText);
}

console.log(document.querySelector(".site-header"));

console.log(document.querySelector("#jumbotronText"));

let primaryContentsPs = document.querySelectorAll(".primary-content p");
console.log(primaryContentsPs);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", function doAlert() {
  alert("Thanks for visiting Bikes for Refugees!");
});
/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
let changeColor = document.querySelector("#bgrChangeBtn");
function makeRed() {
  const background = document.querySelector("body");
  background.classList.add("background--red");
}
changeColor.addEventListener("click", makeRed);
/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
let largerLinks = document.querySelector("#largerLinksBtn");
function makeLargerLinks() {
  const allLinks = document.querySelectorAll("a");
  for (const link of allLinks) {
    link.classList.add("larger");
  }
}
largerLinks.addEventListener("click", makeLargerLinks)
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

  function addSomeText(event) {
  event.preventDefault();

  let inputElement = document.querySelector("#addArticleInput");
  let newP = document.createElement("p");
  newP.innerText = inputElement.value;
  let addP = document.querySelector("#addArticle")
  addP.appendChild(newP)
}

let addTextBtn = document.querySelector("#addArticleBtn");
addTextBtn.addEventListener("click", addSomeText)