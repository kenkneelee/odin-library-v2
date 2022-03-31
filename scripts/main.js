let myLibrary=[];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// using prototype, every new book object created will refer to this function instead of creating a new one
Book.prototype.info = function () {
    return (this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read)
}

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
newBook.onclick = function(){
    addBookToLibrary();
}

const lib = document.getElementById("library");

var clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = function () {
    newGrid();
}


function newGrid() {
    let allBoxes = lib.getElementsByClassName("card");
    [].forEach.call(lib.querySelectorAll(".card"), function (e) {
        e.parentNode.removeChild(e);
    });
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



const book1 = new Book ("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(book1.info());


