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

const allParagrafs = document.querySelectorAll("p");
console.log(allParagrafs);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const elementWithId = document.querySelector("#jumbotronText");
console.log(elementWithId);

// const allParagraf = document.querySelectorAll("")
// function paragrafWithSixLength(paragraf) {
//   return paragraf.length === 6;
// }


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let myAlertBtn = document.querySelector("#alertBtn")

function thankfullAlert () {
  alert("Thanks for visiting Bikes for Refugees!");
}

myAlertBtn.addEventListener("click", thankfullAlert);

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
let changeColorBtn = document.querySelector("#bgrChangeBtn")

function changeColortoRed () {
  document.body.style.backgroundColor = "red";
}

changeColorBtn.addEventListener("click", changeColortoRed);

/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
// let largerLinksBtn = document.querySelector("#largerLinksBtn");

// function largerLinks () {
//   let allLincks = document.querySelectorAll("a");
//   for(let linck of allLincks){
//     for(let i = 0; i < allLincks.length ; i = i + 20){
//     linck.style.fontSize = i + "px";
//     }
//   }
// }

// largerLinksBtn.addEventListener("click", largerLinks);

const largerLinksBtn = document.querySelector("#largerLinksBtn");
const linkNodesList = document.querySelectorAll("a");
largerLinksBtn.addEventListener("click", () => {
  linkNodesList.forEach((link) => {
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
          <div id="addArticle">
            <div style="display: flex">
              <input class="form-control add-article__input" id="addArticleInput" type="textbox">
              <button class="btn btn-primary add-article__button" id="addArticleBtn" type="button">Add some text</button>
            </div>
*/
const addArticleBtn = document.querySelector("#addArticleBtn");//button
const addArticle = document.querySelector("#addArticle");//div element
const addArticleInput = document.querySelector("#addArticleInput");//input
addArticleBtn.addEventListener("click", () => {  //when button was clicked do things below
  const newParagraf = document.createElement("p");  // create new paragraf
  newParagraf.textContent = addArticleInput.value;  //usisng textContent I manipulate with text artibute of p element and reassign text to curent input value
  addArticle.appendChild(newParagraf);  // when everythins ready, we append p as last child to div named addArticle
})