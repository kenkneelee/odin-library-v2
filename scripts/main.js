let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// using prototype, every new book object created will refer to this function instead of creating a new one
Book.prototype.info = function () {
    return (
        this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages, " +
        this.read
    );
};

// function to add a new book to the library array
function addBookToLibrary() {
    const newBook = new Book(
        prompt("Enter book title..", "The Hobbit"),
        prompt("Enter book author..", "J.R.R. Tolkien"),
        prompt("Enter number of pages..", "295"),
        prompt("Read:Y/N", "Y")
    );
    myLibrary.push(newBook);
}

// newBook.onclick = function () {
//     addBookToLibrary();
//     newGrid();
//     display();
// };

// Get the modal
var modal = document.getElementById("newModal");

// Get the button that opens the modal
let newBook = document.getElementById("newBook");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
newBook.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// When the user presses the 'submit' button, add the book to the library
function validate() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.querySelector('input[name="read"]:checked').value;
    const newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
    newGrid();
    display();
    modal.style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("no").checked = true;
}





function display() {
    console.log(myLibrary);
    for (let i = 0; i < myLibrary.length; i++) {

        const newCard = document.createElement("div");
        const newCardHeader = document.createElement("div");

        const newCardTitle = document.createElement("h2");
        const newCardRemove = document.createElement("span");

        const newCardAuthor = document.createElement("div");
        const newCardPages = document.createElement("div");
        const newCardRead = document.createElement("div");
        const newCardReadAnswer = document.createElement("span");

        newCardTitle.textContent = myLibrary[i].title;
        newCardRemove.textContent = "x";

        newCardAuthor.textContent = "Author: " + myLibrary[i].author;
        newCardPages.textContent = "Pages: " + myLibrary[i].pages;

        newCardRead.textContent = "Read: ";
        newCardReadAnswer.textContent = myLibrary[i].read;
        if (myLibrary[i].read == "Yes") {
            newCardReadAnswer.style.color = "Green";
        } else {
            newCardReadAnswer.style.color = "Red";
            newCard.style.backgroundColor="#0408237a";
        }

        newCard.classList.add("card");
        newCardHeader.classList.add("cardHeader");
        newCardRemove.classList.add("cardRemove");
        newCardRemove.setAttribute("id", "delete" + i);

        newCardHeader.appendChild(newCardTitle);
        newCardHeader.appendChild(newCardRemove);
        newCard.appendChild(newCardHeader);

        newCard.appendChild(newCardAuthor);
        newCard.appendChild(newCardPages);

        newCardRead.appendChild(newCardReadAnswer);
        newCard.appendChild(newCardRead);

        lib.appendChild(newCard);

        var deleteBtn = document.getElementById("delete" + i);
        deleteBtn.onclick = function () {
            console.log("deleting " + myLibrary[i].title + "...");
            myLibrary.splice(i, 1);
            newGrid();
            display();
        };

        newCardReadAnswer.classList.add("toggleButton");
        newCardReadAnswer.setAttribute("id", "toggle" + i);
        var toggleRead = document.getElementById("toggle" + i);
        toggleRead.onclick = function () {
            if (myLibrary[i].read == "Yes") {
                myLibrary[i].read = "No";
                newGrid();
                display();
            } else {
                myLibrary[i].read = "Yes";
                newGrid();
                display();
            }
        };

    }
}

/* <div class="card">
<div class="cardHeader">
    <h2 class="cardTitle">Aru's Book of Sin</h2>
    <span class="cardRemove">x</span>
</div>
<span class="cardAuthor">Author: </span>
<span class="cardPages">Pages: </span>
<span class="cardRead">Read: </span>
</div> */

const lib = document.getElementById("library");
const list = document.getElementById("list");

var clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = function () {
    newGrid();
};

var clearListBtn = document.getElementById("clearBtn2");
clearListBtn.onclick = function () {
    newGrid2();
};

function newGrid() {
    let allBoxes = lib.getElementsByClassName("card");
    [].forEach.call(lib.querySelectorAll(".card"), function (e) {
        e.parentNode.removeChild(e);
    });
}

function newGrid2() {
    let allBoxes2 = list.getElementsByClassName("card");
    [].forEach.call(list.querySelectorAll(".card"), function (e) {
        e.parentNode.removeChild(e);
    });
}

const book1 = new Book("A Game of Thrones", "George Martin", 695, "Yes");
const book2 = new Book("Naruto", "Masashi Kishimoto", 4354, "No");
const book3 = new Book("The Lord of The Rings", "J.R.R. Tolkien", 479, "Yes")
const book4 = new Book("Ender's Game", "Orson Scott", 324, "No")
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

display();

