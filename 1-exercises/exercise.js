/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

console.log("Does this work?");

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

// 1.
const pElements = document.querySelectorAll("p");
console.log(pElements);

// 2.
const firstDiv = document.querySelector("div");
console.log(firstDiv);

// imaginary exercise to log out the text of the p elements
// Method 1:

for (const pElement of pElements) {
  console.log(pElement.innerText);
}

//Method 2: 

const pElementText = [...pElements].map(p => p.innerText);
console.log(pElementText);

// 3.

const divElementIdjumbotronText = document.querySelector("#jumbotronText");
console.log(divElementIdjumbotronText);

// 4.

const pElementsInsidePrimaryClass = document.querySelector(".primary-content").querySelectorAll("p"); // important to remember this step
console.log(pElementsInsidePrimaryClass);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
// Method 1:
const buttonAlert = document.querySelector("#alertBtn");

// Question: is it necessary to have preventDefault to stop the page from refreshing?
function doAlert(event) {
  alert("Thanks for visiting Bikes for Refugees!");
  event.preventDefault();
}

buttonAlert.addEventListener ("click", doAlert);

/*
// Method 2:
const buttonAlert = document.querySelector("#alertBtn");

buttonAlert.addEventListener("click", function () { // using anonymous function
  alert("Thanks for visiting Bikes for Refugees!");
})
*/

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

/*
// practice from video- change the background colour by using a CSS class

const buttonChangeBackground = document.querySelector("#bgrChangeBtn");

console.log(buttonChangeBackgroun);

function makeRed() {
  document.body.classList.add("background-red");
} 

*/

// Method 1:
function makeRed() {
  document.body.classList.add("background-red");
} 
const buttonChangeBackgroundToRed = document.querySelector("#bgrChangeBtn");

buttonChangeBackgroundToRed.addEventListener("click", makeRed);

/*
// Method 2:
const buttonChangeBackgroundToRed = document.querySelector("#bgrChangeBtn");

buttonChangeBackgroundToRed.addEventListener("click", function() {
  document.body.classList.add("background-red");
});
*/

/* 
let buttonConvertBackgroundColour = document.querySelector("#bgrChangeBtn");

  buttonConvertBackgroundColour.addEventListener("click", function() {
  document.querySelector("body").classList.add("background-red");
*/

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

/*
// practice from video

const allLinks = document.querySelectorAll("a");

console.log(allLinks);

for (const link of allLinks) {
  link.style.fontSize = "1.5em";
}
*/

/*
// document.querySelectorAll("a").forEach((a) => (a.style.fontSize = "2em"));

// practice from video- change the font size by setting each of the links with a CSS class

const listOfLinks = document.querySelectorAll("a");

for (const link of listOfLinks) {
  link.classList.add("larger");
  // console.log(link.classList);
}
*/

// Method 1:
const buttonForLargerText = document.querySelector("#largerLinksBtn");

function makeFontLarger () {
  document.querySelectorAll("a").forEach(a => a.classList.add("larger"));
}

buttonForLargerText.addEventListener("click", makeFontLarger);

/*
// Method 2:
const buttonForLargerText = document.querySelector("#largerLinksBtn");

const allLinks = document.querySelectorAll("a");

buttonForLargerText.addEventListener("click", function() {
  [...allLinks].map(a => a.classList.add("larger"))
});
*/

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

/*
Psedocode:
1. register or add a listern to the buttonAddText
2. listener will take from the object and 
3. displays it in the textarea.
*/

const buttonToAddComments = document.querySelector("#addArticleBtn");

buttonToAddComments.addEventListener("click", function (event){
  // preventDefault will stop the page from refreshing when we click on the button
  event.preventDefault();
  // finding the input element 
  const inputElement = document.querySelector("#addArticleInput");
  // create a new paragraph element
  const newPElement = document.createElement("p");
  // set the inner text to the value of the input element
  newPElement.innerText = inputElement.value;
  // add the new paragraph element with the input value inside the div #addArticle in the page
  document.querySelector("#addArticle").appendChild(newPElement);
})


// document.querySelector("#addArticleBtn").addEventListener("click", function(){
//   const textValue = document.querySelector("#addArticleInput").value;
//   console.log(textValue);
//   const pElement = document.createElement("p");
//   pElement.innerText = textValue;
//   document.querySelector("#addArticle").appendChild(pElement);
// });


