/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/
console.log("Does this work?")
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
console.log(document.querySelectorAll("p")); //task 1.1
console.log(document.querySelector("div")); //task 1.2

const paragraph = document.querySelectorAll("p");
for(const text of paragraph){
  console.log(text.innerText);
}; //task1.1-a


console.log(document.querySelector("#jumbotronText")); //task1.2

console.log(document.querySelectorAll(".primary-content p"));

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/


/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

const backgroundColor = document.querySelector("body");
backgroundColor.classList.add("background--red");



/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

const links = document.querySelectorAll("a");
for(const aTag of links){
  aTag.classList.add("larger");
}


/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/
