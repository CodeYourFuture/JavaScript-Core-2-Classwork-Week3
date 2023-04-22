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

    document.querySelectorAll("p");
  NodeList(6) [p.lead, p.article-lead, p.article-lead, p.article-lead, p.article-lead, p.text-center]
  or
  // const p = document.querySelectorAll("p");
  // console.log(p);



    2. the first div element node
.    --> should log the ".site-header" node
            document.querySelector("div.site-header");

.l.    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node
        document.querySelector("#jumbotronText");

        or

        const jumbotronText = document.querySelector("#jumbotronText");
        console.log(jumboTronText);


    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3
    const primaryContent = document.querySelector(".primary-content");
        console.log(primaryContents);

    const pElements = primaryContent.querySelectorAll("p");
        if(pElement.length === 3) {
          console.log(pElements);
        }

*/


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
  let alertBtn = document.querySelector("#alertBtn");
  // function doAlert() {
  //   alert("Thanks for visiting Bikes for Refugees!");
  // }
  alertBtn.addEventListener("click",function(event) {
    event.preventDefault
    alert("Thanks for visiting Bikes for Refugees!");
  });

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
const changeColor = document.querySelector("#bgrChangeButton");
const body = document.querySelector("body");
      changeColor.addEventListener("click", () => {
        body.classList.add("red-background")
      });


/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
        function makeLarger(event){
          event.preventDefault();
          const links = document.querySelectorAll("a");
          for(let link of links){
            link.classList.toggle("larger")
          }
        }
        const largerLinks = document.querySelector("#largerLinksBtn");
        
        largerLinks.addEventListener("click", makeLarger);

/*k
Task 5
======
 
When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
const addSomeTextBtn = document.querySelector("#addArticleBtn");

function addSomeText(event) {
  event.preventDefault();

  const inputElm = document.querySelector("#addArticleInput");
  const newP = document.createElement("p");
  newP.innerText = inputElm.value;
  const addNewP = document.querySelector("#addArticle");
  addNewP.appendChild(newP);
};
addSomeTextBtn.addEventListener("click", addSomeText);


