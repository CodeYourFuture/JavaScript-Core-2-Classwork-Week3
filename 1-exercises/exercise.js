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
const pElements=document.querySelectorAll("p")
const firstDiv=document.querySelector("div")
const jumbotronText=document.querySelector("#jumbotronText")
const pElementsPrimary=document.querySelectorAll(".primary-content p")
console.log(pElements)
console.log(jumbotronText)
console.log(pElementsPrimary)
console.log(firstDiv)

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertNowButton = document.querySelector("#alertBtn")
alertNowButton.addEventListener("click",()=>{alert ("thanks for visiting Bikes for Refugees!")})
console.log(alertNowButton)

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

const changebtn = document.querySelector("#bgrChangeBtn");
changebtn.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "red";
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
const largelinks = document.querySelector("#largerLinksBtn");
const links = document.querySelectorAll(
  "a"
);
largelinks.addEventListener("click", () => {
  for (let link of links) {
    link.style.fontSize = "50px";
  }
});

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
const addTextElement = document.querySelector("#addArticleB")