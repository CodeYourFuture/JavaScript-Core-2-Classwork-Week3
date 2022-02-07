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

// */
let paragraphVar = document.querySelector("p");
console.log(paragraphVar);
let divElement = document.querySelector("div");
console.log(divElement);
let jumboId = document.querySelector("#jumbotronText");
console.log(jumboId);
let pElement = document.querySelectorAll(".primary-content p");
console.log(pElement);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
// */
let alertButton = document.querySelector(`#alertBtn`);
alertButton.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
// let changeColour = document.querySelector(`#bgrChangeBtn`);
// changeColour.addEventListener(`click`, () => {
//   // document.body.style.backgroundColor = "red";
//   document.body.classList.add(`background--red`);
// });
//  I made a mistake, used document in line 55 and use body directly

let changeBgBtn = document.querySelector("#bgrChangeBtn");
changeBgBtn.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.classList.add("background--red");
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
// let largerLinks = document.querySelector(`#largerLinksBtn`);
// largerLinks.addEventListener(`click`, () => {
//   let link = document.querySelectorAll(`a`);
//   for (let lnk of link) {
//     lnk.style.fontSize = "26px";
//   }
// });
// the code above are those I wrote in the class and are correct.

let largerLinksButton = document.querySelector("#largerLinksBtn");
largerLinksButton.addEventListener("click", () => {
  let links = document.querySelectorAll("a");
  for (let link of links) {
    link.style.fontSize = "25px";
  }
});
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
// let addSomeText = document.querySelector(`#addArticleBtn`);
// addSomeText.addEventListener(`click`,()=> {
//  let textInput = document.querySelector(`#addArticleInput`).value ;
//  let paragraph = document.createElement(`p`);
//  paragraph.innerText = textInput.value;

// })
// I couldn't finish those code in the class work.

let addTextBtn = document.querySelector("#addArticleBtn");
addTextBtn.addEventListener("click", () => {
  let input = document.querySelector("#addArticleInput");
  let newParagraph = document.createElement("p");
  newParagraph.innerText = input.value;
  let parentElement = document.querySelector("#addArticle");
  parentElement.appendChild(newParagraph);
  input.value = ""; // resets the input field
});
