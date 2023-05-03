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
// 1. all the "p" element nodes of the document,
// --> should log a list of nodes with a length of 6
console.log(document.querySelectorAll("p"));

//test printing content of first p with .innerText
// console.log(document.querySelector("p").innerText);

//trying to print content of all p with .innerText but it gave me undefined
//I guess it is because we need to loop through the p's as they are node list like an array of objects
// console.log(document.querySelectorAll("p").innerText);

//to print content of all p : first store all p's in variable then using map make a new array with
//.inner text

// const allP = document.querySelectorAll("p");
// const arrayofpContent = [...allP].map((p) => p.innerText);
// console.log(arrayofpContent);

// 2. the first div element node
//     --> should log the ".site-header" node
console.log(document.querySelector("div"));

// const ids = document.querySelectorAll("id");
// const jumid = [...ids].filter((id) => id === "jumbotronText");
// console.log(jumid);

//    3. the element with id "jumbotronText"
//   --> should log the "#jumbotronText" node
console.log(document.querySelectorAll("#jumbotronText"));

// 4. all the "p" elements of contained inside the .primary-content element node
// --> should log a list of nodes with a length of 3
//I think I got the question wrongly, my understanding is to log all p's inside the primary-content class which there is only one p

// console.log(document.querySelectorAll(".primary-content")); // this one didn't work
const primaryContent = document.querySelector(".primary-content");
console.log(primaryContent);
const asd = primaryContent.querySelectorAll("p");
console.log(asd);
// const pWithprimaryContent = [...primaryContent].map((p) => p.innerText);
// console.log(pWithprimaryContent);

//need help ????????????

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", function () {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

const changeBckColor = document.querySelector("#bgrChangeBtn");
const bodyElement = document.querySelector("body");
changeBckColor.addEventListener("click", function () {
  // return bodyElement.setAttribute("class", "background-color");
  bodyElement.style.backgroundColor = "red";
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

const largerButton = document.querySelector("#largerLinksBtn");

const allLinks = document.querySelectorAll("a");

const makeLinksLarger = function () {
  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].style.fontSize = "2rem";
  }
};

largerButton.addEventListener("click", makeLinksLarger);

// const loopThroughLinks = allLinks.map((link) => link);

// How to change or to set an css attributes from JS

/*
Task 5
======
When a user clicks the 'Add some text' button,
the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

let addSomeTextEl = document.getElementById("addArticleBtn");

const addSomeTextFunction = function () {
  let newParagraph = document.createElement("p");
  console.log("newParagraph" + newParagraph);
  let inputContent = document.getElementById("addArticleInput").value;
  console.log("inputContent" + inputContent);

  newParagraph.innerHTML = inputContent;
  console.log("newParagraph after adding Inner " + newParagraph.innerHTML);

  let addNewParagraphHere = document.getElementById("addArticle");
  console.log(addNewParagraphHere);

  addNewParagraphHere.appendChild(newParagraph); // console.log(inputContent);
};

addSomeTextEl.addEventListener("click", addSomeTextFunction);
