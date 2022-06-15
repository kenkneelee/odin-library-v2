class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    } 
    info() {
        return (this.title + '' + this.author + '' + this.pages + '' + this.read);
    }
}

// declare library array
let myLibrary = [];
let myList = [];
let recommended = [];

// function to add a new book to the library array
// function addBookToLibrary() {
//     const newBook = new Book(
//         prompt("Enter book title..", "The Hobbit"),
//         prompt("Enter book author..", "J.R.R. Tolkien"),
//         prompt("Enter number of pages..", "295"),
//         prompt("Read:Y/N", "Y")
//     );
//     myLibrary.push(newBook);
// }

// Modal Stuff -------------------------------------------------->
// Get the modal
var modal = document.getElementById("newBookModal");
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

// End of modal stuff -------------------------------------------------------->

// Second Modal Stuff -------------------------------------------------->
// Get the modal
var listModal = document.getElementById("newListModal");
// Get the button that opens the modal
let newList = document.getElementById("newList");
// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal
newList.onclick = function () {
    listModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    listModal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == listModal) {
        listModal.style.display = "none";
    }
};

// When the user presses the 'submit' button, add the book to the list
function validateList() {
    var title = document.getElementById("listTitle").value;
    var author = document.getElementById("listAuthor").value;
    var pages = document.getElementById("listPages").value;
    var read = document.querySelector('input[name="listRead"]:checked').value;
    const newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myList.push(newBook);
    newGrid2();
    displayList();
    listModal.style.display = "none";
    document.getElementById("listTitle").value = "";
    document.getElementById("listAuthor").value = "";
    document.getElementById("listPages").value = "";
    document.getElementById("listNo").checked = true;
}

// End of second modal stuff -------------------------------------------------------->

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

function displayList() {
    console.log(myList);
    for (let i = 0; i < myList.length; i++) {
        const newCard = document.createElement("div");
        const newCardHeader = document.createElement("div");

        const newCardTitle = document.createElement("h2");
        const newCardRemove = document.createElement("span");

        const newCardAuthor = document.createElement("div");
        const newCardPages = document.createElement("div");
        const newCardRead = document.createElement("div");
        const newCardReadAnswer = document.createElement("span");
        const newCardMove = document.createElement("button");

        newCardTitle.textContent = myList[i].title;
        newCardRemove.textContent = "x";

        newCardAuthor.textContent = "Author: " + myList[i].author;
        newCardPages.textContent = "Pages: " + myList[i].pages;

        newCardRead.textContent = "Owned: ";
        newCardReadAnswer.textContent = myList[i].read;
        if (myList[i].read == "Yes") {
            newCardReadAnswer.style.color = "Green";
        } else {
            newCardReadAnswer.style.color = "Red";
            newCard.style.backgroundColor="#0408237a";
        }
        newCardMove.textContent = "Move to My Books";
        newCardRead.classList.add("read");
        newCardReadAnswer.classList.add("readAnswer");
        if (newCardReadAnswer.textContent=="Yes") {
            newCardReadAnswer.appendChild(newCardMove);
        }
        newCardRead.appendChild(newCardReadAnswer);


        newCard.classList.add("card");
        newCardHeader.classList.add("cardHeader");
        newCardRemove.classList.add("cardRemove");
        newCardRemove.setAttribute("id", "deleteList" + i);

        newCardHeader.appendChild(newCardTitle);
        newCardHeader.appendChild(newCardRemove);
        newCard.appendChild(newCardHeader);

        newCard.appendChild(newCardAuthor);
        newCard.appendChild(newCardPages);
        newCard.appendChild(newCardRead);

        list.appendChild(newCard);

        var deleteBtn = document.getElementById("deleteList" + i);
        deleteBtn.onclick = function () {
            console.log("deleting " + myList[i].title + "...");
            myList.splice(i, 1);
            newGrid2();
            displayList();
        };

        newCardReadAnswer.classList.add("toggleButton");
        newCardReadAnswer.setAttribute("id", "toggleList" + i);
        var toggleRead = document.getElementById("toggleList" + i);
        toggleRead.onclick = function () {
            if (myList[i].read == "Yes") {
                myList[i].read = "No";
                newGrid2();
                displayList();
            } else {
                myList[i].read = "Yes";
                newGrid2();
                displayList();
            }
        };

    }
}

const lib = document.getElementById("library");
const list = document.getElementById("list");

var clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = function () {
    newGrid();
    myLibrary=[];
};

var clearListBtn = document.getElementById("clearBtn2");
clearListBtn.onclick = function () {
    newGrid2();
    myList=[];
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

const recommended0 = new Book("Pride and Prejudice", "Jane Austen", 364, "No");
const recommended1 = new Book("The Great Gatsby", "F Scott Fitzgerald", 180, "No");
const recommended2 = new Book("Brave New World", "Aldous Huxley", 311, "No");
const recommended3 = new Book("Fahrenheit 451", "Ray Bradbury", 256, "No");
const recommended4 = new Book("The Godfather", "Mario Puzo", 448, "No");
const recommended5 = new Book("Jaws", "Peter Benchley", 278, "No");
const recommended6 = new Book("To Kill A Mockingbird", "Harper Lee", 281, "No");
recommended.push(recommended0,recommended1,recommended2,recommended3,recommended4,recommended5,recommended6);
console.log(recommended);

for (let i=0; i<recommended.length;i++) {
    var addRecommended = document.getElementById("recommended" + i);
    addRecommended.onclick = function () {
        console.log("Adding " + recommended[i].title + "...");
        myList.push(recommended[i]);
        newGrid2();
        displayList();
        document.getElementById("tab2").checked=true;
    };
}

const book1 = new Book("A Game of Thrones", "George Martin", 695, "Yes");
const book2 = new Book("Naruto", "Masashi Kishimoto", 4354, "No");
const book3 = new Book("The Lord of The Rings", "J.R.R. Tolkien", 479, "Yes")
const book4 = new Book("Ender's Game", "Orson Scott", 324, "No")
myLibrary.push(book1, book2, book3, book4);
myList.push(book3, book1);
display();
displayList();
