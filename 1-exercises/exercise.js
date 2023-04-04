/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/
console.log("does this work");
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
const pElements = document.querySelectorAll("p");
for (const element of pElements) {
  console.log(element);
}
console.log(document.querySelector("div"));

const newElementsP = [...pElements].map((element) =>
  console.log(element.innerText)
);
console.log(document.querySelector("#jumbotronText"));
console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
const colorChange = document.querySelector("#bgrChangeBtn");
colorChange.addEventListener("click", function (event) {
  event.preventDefault();
  const red = document.querySelector("body");
  red.classList.add("background--red");
});
/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
const largeLinks = document.querySelector("#largerLinksBtn");
largeLinks.addEventListener("click", function (event) {
  event.preventDefault();
  const red = document.querySelector("body");
  red.classList.add("background--red");
});
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be 
appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
const addSomeText = document.querySelector("#addArticleBtn");
addSomeText.addEventListener("click", function (event) {
  const inputElement = document.querySelector("#addArticleInput");
  event.preventDefault();
  const newP = document.createElement("p");
  newP.innerText = inputElement.value;
  const newPlace = document.querySelector("#addArticle");
  newPlace.appendChild(newP);
});
