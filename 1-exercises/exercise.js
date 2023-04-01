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
let elementArray = Array.from(document.querySelectorAll("p"));
console.log(elementArray)

let siteHeader = document.querySelector(".site-header");
console.log(siteHeader);

let jumbotronText = document.querySelector("#jumbotronText");
console.log(jumbotronText);

let primary_content = document.querySelector(".primary-content").querySelectorAll('p');
console.log(primary_content);
// console.log(primary_content.querySelectorAll("p"))







/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let AlertButton = document.querySelector("#alertBtn");
AlertButton.addEventListener("click", Thanksmsg);

function Thanksmsg() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
let body = document.querySelector("body");
const bgrChangeBtn = document.querySelector("#bgrChangeBtn");
bgrChangeBtn.addEventListener("click", changecolor);
function changecolor() {
  body.classList = "bodybackground";
}

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
let linksArr = Array.from(document.querySelectorAll("a"));
const largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", largerthelinks);
function largerthelinks() {
  for (let link of linksArr) {
    link.style.fontSize = "x-large";
  }
}

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
let addArticle = document.querySelector("#addArticle");
const AddArticleBtn = document.querySelector("#addArticleBtn");
AddArticleBtn.addEventListener("click", appendtext);
function appendtext() {
  const inputValue = document.querySelector("#addArticleInput").value;
  let paragraph = document.createElement("p");
  paragraph.textContent = inputValue;
  // paragraph.appendChild(document.createTextNode(inputValue))
  addArticle.appendChild(paragraph);
}