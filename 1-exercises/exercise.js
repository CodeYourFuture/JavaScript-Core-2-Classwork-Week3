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
// -- 2 
let firstD = document.querySelector(".site-header");
console.log(firstD);

// --3
console.log(document.querySelector("#jumbotronText"));

// --4
let primaryContentP = document.querySelector(".primary-content");
 let pElements = primaryContentP.querySelectorAll("p")
 console.log(pElements);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click",() => {
  alert("Thanks for visiting bikes for refugee");
})
console.log(myButton);

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
let changeOnClick = document.querySelector("#bgrChangeBtn")
let body = document.querySelector("body");
changeOnClick.addEventListener("click", () => {
  body.classList.add("background--red")
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
let largerLinks = document.querySelector("#largerLinksBtn")
largerLinks.addEventListener("click", () => { 
let increaseLinks = document.querySelectorAll("a");
for(let link of increaseLinks) {
  link.style.fontSize = "30px"; /// making the change in line style 
}
})


/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
let addSomeTextButton = document.querySelector("#addArticleBtn")
addSomeTextButton.addEventListener("click", () => {
  let addArticleInput = document.querySelector("#addArticleInput")
  let addArticle = document.querySelector("#addArticle")
  let newParagraph = document.createElement("p");
  newParagraph.innerText = addArticleInput.value;
  addArticleInput.appendChild(newParagraph);
})