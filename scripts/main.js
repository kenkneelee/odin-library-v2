let myLibrary=[];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // initial method, no prototype AKA makes a new Book.info for every new book?

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




const book1 = new Book ("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(book1.info());


