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
const task1=document.querySelectorAll("p");
console.log(task1)
  
const task2=document.querySelector(".site-header");
console.log(task2)

const task3=document.querySelector("#jumbotronText");
console.log(task3)

const task4=document.querySelector(".primary-content").querySelectorAll("p");
//const task4=document.querySelectorAll(".primary-content p");
console.log(task4)
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const myButton= document.querySelector("#alertBtn");
myButton.addEventListener("click",()=>{
alert("Thanks for visiting Bikes for Refugees!")});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
const backgroundButton = document.querySelector("#bgrChangeBtn");
backgroundButton.addEventListener("click",()=>{
 // const bdyelement = document.querySelector
backgroundButton.style.backgroundColor="red"});



/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

const largerLinks = document.querySelector("#largerLinksBtn");
largerLinks.addEventListener("click",()=>{
  let links=document.querySelectorAll("a")
  //console.log(links);
 //link.forEach (tag =>{tag.style.fontsize="x-larger"})
  for (let i=0;i<links.length;i++){
  links[i].style.fontSize="32px";
    
  }
}); 
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
/*const newParagraphElement = document.createElement("p")
newParagraphElement.innerText = "Hey, thanks for visiting!"
newParagraphElement.className = "row"

const footerElement = document.querySelector("#navbarSupportedContent")
footerElement.appendChild(newParagraphElement)
*/
const addtext= document.querySelector("#addArticleBtn")
addtext.addEventListener("click",()=>{
const newParaElement = document.createElement("p")
const newInput = document.querySelector("#addArticleInput")
const inputValue = newInput.value
newParaElement.innerText=inputValue
const footerElement = document.querySelector("#addArticle")
footerElement.appendChild(newParaElement)
})
