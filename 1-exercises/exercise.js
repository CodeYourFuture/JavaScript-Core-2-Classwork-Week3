/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

//example
//const contentDiv = document.querySelector()

// note: queryselector and queryselctor all allow you to target, classes id's and html elements, you can also use get documetn by id and other document object methods

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
console.log(document.querySelector("div"));
console.log(document.querySelector("#jumbotronText"));
let testp = document.querySelector(".primary-content p");
console.log(testp);
let testp2 = document.querySelectorAll(".primary-content p");
console.log(testp2);
// can also use chaining method to do multiple selectors
let test3 = document.querySelector(".primary-content").querySelectorAll("p");
// if looking for specifiacally one element you generally want to be as specific as possible.
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertB = document.querySelector("#alertBtn");

alertB.addEventListener("click", (event) => {
  console.log(event);
  alert("Thanks for visiting Bikes for Refugees!");
});

const articleInput = document.querySelector("#addArticleInput");

articleInput.addEventListener("keypress", (event) => {
  console.log(event);
  console.log(event.target.value);
});
// note : target represents the node which the event happend on and
// the value is  the value teh trget elemtny contains
/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
const docBody = document.querySelector("body");
//bgrChangeBtn;
const changButton = document.querySelector("#bgrChangeBtn");
changButton.addEventListener("click", () => {
  //const docBody = document.querySelector("body");
  // docBody.style.backgroundColor = "green";
  let colTest = docBody.style.backgroundColor !== "green" ? "green" : "white";
  console.log(colTest);
  docBody.style.backgroundColor = colTest;
});
//changButton.style.backgroundColor = 'pink';
//

// let myParagraph = document.querySelector(".myParagraph");

// myParagraph.innerText = "I was changed by javascript";
// myParagraph.style.backgroundColor = "red";

//
const navLinks = document.querySelectorAll(".nav-link");

console.log(navLinks);

navLinks[1].addEventListener("click", () => {
  let testArrNav = Array.from(navLinks);
  console.log(testArrNav, 1);
  testArrNav.forEach((el) => {
    el.classList.add("bg-color");
  });
});
// navLinks[0].addEventListener("click", () => {
//   for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].style.backgroundColor = "blue";
//   }
// });

bgrChangeBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
});
//question - why cant you use all array methods on node list
// current loops seem to be ok, for, forof , forin
/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
const largerLinksBtn = document.querySelector("#largerLinksBtn");

largerLinksBtn.addEventListener("click", () => {
  const aTags = document.querySelectorAll("a");
  aTags.forEach((el) => {
    el.style.fontSize = "4em";
  });
});
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

const addTextBtn = document.querySelector("#addArticleBtn");

addTextBtn.addEventListener("click", () => {
  let input = document.querySelector("#addArticleInput");
  const inputText = input.value;
  // can simplif with chaining as the input variable now represents the
  // input = document.querySelector("#addArticleInput").value
  console.log(input.value);
  const textToAdd = document.createElement("p");
  //can add the above element to the top of the function

  textToAdd.innerHTML = inputText;
  //assign  element to innerHtml, can also use innerText.

  const parent = document.querySelector("#addArticle");
  parent.appendChild(textToAdd);
});

/// elles way

const addTextBtn2 = document.querySelector(".heading-underline");

addTextBtn2.addEventListener("click", () => {
  const pElement = document.createElement("p"); // create element
  let textToAdd = document.querySelector("#addArticleInput").value; // asign text input to variable
  pElement.innerText = textToAdd; // change / reasign the value of the elements innerText
  console.log(textToAdd, pElement);

  const parent = document.querySelector("#addArticle");
  parent.appendChild(pElement);
});
