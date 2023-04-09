/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/
console.log("hello")
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
//.  document.querySelector is not a standard array it is a node list.

 ///  1
const allPEles = document.querySelectorAll("p");
console.log(allPEles);

for(const allP of allPEles){
  console.log(allP.innerText);
}
const pTexts = [...texts].map(p => p.innerText);
console.log(pTexts, "pTexts");

const nodeLists = document.querySelectorAll("p");
for (const nodeList of nodeLists){
  console.log(nodeList.innerText);
}

/// 2
console.log(document.querySelector(".site-header"));  ///. 2

 ///. 3
const jumbotronText = document.querySelector("#jumbotronText");
console.log(jumbotronText); 

console.log(document.querySelector("#jumbotronText")); 

//////.  4
const primaryContents = document.querySelector('.primary-content');
console.log(primaryContents);

const pElements = primaryContent.querySelectorAll('p');
if (pElements.length === 3) {
  console.log(pElements);
}



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", function(event){
  event.preventDefault();
  alert("Thanks for visiting Bikes for Refugees!");
})


/*
Task 3
=======

When a user clicks the 'Change color' button, the background color of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
const changeColor = document.querySelector("#bgrChangeBtn")
function makeRed(event){
event.preventDefault(); 
const body = document.querySelector("body");
body.classList.add("background--red");
}
backgroundColor.addEventListener("click", makeRed);

// function makeRed(event){
//   event.preventDefault();
//   document.body.style.backgroundColor = "red";
// }


/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

function makeLarger(event){
  event.preventDefault();
  const links = document.querySelectorAll("a");
  for(const link of links){
    link.classList.toggle("larger")
  }
}
const LargerLinks = document
.querySelector("#largerLinksBtn");
LargerLinks.addEventListener("click", makeLarger);

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
const addSomeTextBtn= document
.querySelector("#addArticleBtn");

function addSomeText(event){
  event.preventDefault();

const inputElem = document.querySelector("#addArticleInput");

const newP = document.createElement("p");

newP.innerText = inputElem.value;

const addNewP = document.querySelector("#addArticle");
addNewP.appendChild(newP);
}
addSomeTextBtn.addEventListener("click", addSomeText);