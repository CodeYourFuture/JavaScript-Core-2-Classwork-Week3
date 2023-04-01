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

const allPTags = document.getElementsByTagName('p');
console.log(allPTags);

const firstDiv = document.querySelector('.site-header');
console.log(firstDiv);

const jumbotronText = document.querySelector('#jumbotronText');
console.log(jumbotronText);

const allPElements = document.querySelectorAll('.primary-content ');
console.log(allPElements);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS1rem class instead of adding styles to the element?
*/
var changeColor = document.querySelector('#bgrChangeBtn');

changeColor.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = 'red';
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
let increaseText = document.querySelector('#largerLinksBtn');

console.log(increaseText);

increaseText.addEventListener('click', () => {
  console.log("hi");
  const body = document.querySelector('body');
  body.style.fontSize = '8rem';


});

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.

*/

let addAParagraph = document.querySelector('#addArticleBtn');

addAParagraph.addEventListener('click', () => {

  let textInputValue = document.querySelector('#addArticleInput').value;
  let newParagraph = document.createElement('p');
  newParagraph.textContent = textInputValue;
  document.querySelector('#addArticle').appendChild(newParagraph);

});