/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/


// // Task 1
// // =======

// // Write JavaScript below that console.logs:
// //     1. all the "p" element nodes of the document,
// //     --> should log a list of nodes with a length of 6
    
//     document.querySelectorAll("p")
//     // (or)
//     const p = document.querySelectorAll("p");
//     console.log(p);

//     NodeList(6) [p.lead, p.article-lead, p.article-lead, p.article-lead, p.article-lead, p.text-center]
      
//     // 2. the first div element node
//     // --> should log the ".site-header" node
//      const siteHeader = document.querySelector("div.site-header");
//      console.log(siteHeader);

//     // 3. the element with id "jumbotronText"
//     // --> should log the "#jumbotronText" node
//      const jumbotronText = document.querySelector("#jumbotronText");
//      console.log(jumbotronText);

//     // 4. all the "p" elements of contained inside the .primary-content element node
//     // --> should log a list of nodes with a length of 3

//     const primaryContentNode = document.querySelector(".primary-content");
//     const pNodes = primaryContentNode.getElementsByTagName("p");
//     for (let i = 0; i < pNodes.length; i++) {
//       console.log(pNodes[i]);
//     }



/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.querySelector("#alertBtn");

alertBtn.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
const bgrChangeBtn = document.querySelector("#bgrChangeBtn");
const bodyNode = document.querySelector("body");
bgrChangeBtn.addEventListener("click", () => {
  bodyNode.classList.add("red-background");
});

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
const largerLinksBtn = document.querySelector("#largerLinksBtn");
const linkNodes = document.querySelectorAll("a");
largerLinksBtn.addEventListener("click", () => {
  linkNodes.forEach((link) => {
    const fontSize = window
      .getComputedStyle(link)
      .getPropertyValue("font-size");
    const currentFontSize = parseFloat(fontSize);
    link.style.fontSize = `${currentFontSize + 2}px`;
  });
});

/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
const addArticleBtn = document.querySelector("#addArticleBtn");
const addArticleInput = document.querySelector("#addArticleInput");
const addArticle = document.querySelector("#addArticle");

addArticleBtn.addEventListener("click", () => {
  const text = addArticleInput.value;
  const newParagraph = document.createElement("p");
  const textNode = document.createTextNode(text);
  newParagraph.appendChild(textNode);
  addArticle.appendChild(newParagraph);
});