/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/
console.log("This is a Test!")
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
//1.
const elementP = document.querySelectorAll("p");
console.log(elementP);
//2.
const elementDiv = document.querySelector("div");
console.log(elementDiv);
//3.
const elementId = document.querySelector("#jumbotronText");
console.log(elementId);
//4.
const allElementP = document.querySelector(".primary-content").querySelectorAll("p");
console.log(allElementP);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBox = document.querySelector("#alertBtn")

function alertByClick(){
alert("Thanks for visiting Bikes for Refugees!");
}
alertBox.addEventListener("click",alertByClick);
/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
const changeColourToRed = document.querySelector("#bgrChangeBtn");
function makeRed(){
  document.body.classList.add("background-red");
}
changeColourToRed.addEventListener("click",makeRed);

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
const largerTextBtn = document.querySelector("#largerLinksBtn");

 function makeFontLarger () {
   document.querySelectorAll("a").forEach((a) => a.classList.add("larger"));
 }

 largerTextBtn.addEventListener("click", makeFontLarger);
 
//for(const link of document.querySelectorAll("a")){
//  link.style.fontSize = "1.5em";
//}

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
const buttonToAddComments = document.querySelector("#addArticleBtn");

 buttonToAddComments.addEventListener("click", function (event){
   event.preventDefault();
   const inputElement = document.querySelector("#addArticleInput");
   const newPElement = document.createElement("p");
   newPElement.innerText = inputElement.value;
   document.querySelector("#addArticle").appendChild(newPElement);
 });