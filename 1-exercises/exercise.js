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
 let paragraph = document.querySelectorAll("p")
 let paragraphText = [...paragraph].map(p => p.innerText)
console.log(paragraphText)
console.log(paragraph)

let firstDiv = document.querySelector(".site-header")
console.log(firstDiv)

console.log(document.querySelector("#jumbotronText"))

let element = document.querySelector(".primary-content")
console.log(element, "element")
let p = element.querySelectorAll("p")
console.log(p)


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBatton = document.querySelector("#alertBtn")
alertBatton.addEventListener("click", function() {
  alert ("Thanks for visiting Bikes for Refugees!")
})


/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

let button = document.querySelector("#bgrChangeBtn")
console.log(button.innerText)

let bakground = document.querySelector("body")

button.onclick = function(){
  bakground.classList.add("background--red")
}


/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/ 
let LagerTextButton = document.querySelector("#largerLinksBtn")

LagerTextButton.addEventListener("click", function(){
  let biggerLinks = document.querySelectorAll("a")
  for(let link of biggerLinks){
    link.style.fontSize = "1.5em"
  }
  
})


/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

let articleInput = document.querySelector("#addArticleInput") // input
let clickButton = document.querySelector("#addArticleBtn") // button
 let addComment = document.querySelector("#addArticle") // div of input and button
console.log(clickButton)



clickButton.addEventListener("click", function(event){

  event.preventDefault();
 
  let createPElement = document.createElement("p");

  console.log(createPElement)

  createPElement.innerText = articleInput.value;
  addComment.appendChild(createPElement) // Add comment to the end area

});
