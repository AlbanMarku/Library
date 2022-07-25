let myLibrary = [];

function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
}
function FantasyBook(title, author, genre, typeOfFantasy) {
    Book.call(this, title, author, genre);
    this.typeOfFantasy = typeOfFantasy;
}

FantasyBook.prototype = Object.create(Book.prototype);

Book.prototype.printInfo = function() {
    return this.title
}

FantasyBook.prototype.printInfo = function() {
    return `you got ${this.title} and you got ${this.author}`
}

FantasyBook.prototype.fantLore = function() {
    return "The lore for this fant is that morder is bad"
}

// const myFantasyBook = new FantasyBook("lotr", "greg", "fantasy", "high Fantasy");
// console.log(myFantasyBook.printInfo());
// const book = new Book("got", "steve", "crime");
// console.log(book.printInfo());
// console.log(myFantasyBook.fantLore());