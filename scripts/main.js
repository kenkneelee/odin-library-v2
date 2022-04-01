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

function addBookToLibrary() {
    const newBook = new Book(
        prompt("Enter book title..", "The Hobbit"),
        prompt("Enter book author..", "J.R.R. Tolkien"),
        prompt("Enter number of pages..", "295"),
        prompt("Read:Y/N", "Y")
    );
    myLibrary.push(newBook);
}

let newBook = document.getElementById("newBook");
newBook.onclick = function () {
    addBookToLibrary();
    newGrid();
    display();
};

function display() {
    console.log(myLibrary);
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);

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

        newCardRead.textContent = "Read: " + myLibrary[i].read;
        newCardReadAnswer.textContent = myLibrary[i].read;
        if (myLibrary[i].read == "Yes") {
            newCardReadAnswer.style.color = "Green";
        } else {
            newCardReadAnswer.style.color = "Red";
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
        newCard.appendChild(newCardRead);

        lib.appendChild(newCard);

        var deleteBtn = document.getElementById("delete" + i);
        deleteBtn.onclick = function () {
            console.log("deleting " + myLibrary[i].title + "...");
            myLibrary.splice(i, 1);
            newGrid();
            display();
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

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(book1.info());
