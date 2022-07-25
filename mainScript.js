const displayArea = document.querySelector("main");
const card = document.createElement("div");
const bookName = document.createElement("h2");
const bookAuthor = document.createElement("h3");
const pageArea = document.createElement("div");
const sub1Btn = document.createElement("button");
const sub5Btn = document.createElement("button");
const add5Btn = document.createElement("button");
const add1Btn = document.createElement("button");
const numberDisplay = document.createElement("p");
const buttonArea = document.createElement("div");
const readButton = document.createElement("button");
const removeButton = document.createElement("button");

card.classList.add("bookCard");
displayArea.appendChild(card);
bookName.textContent = "lotr";
card.appendChild(bookName);
bookAuthor.textContent = "jrr";
card.appendChild(bookAuthor);

pageArea.classList.add("pageArea");
card.appendChild(pageArea);
sub1Btn.textContent = "-1";
sub1Btn.classList.add("incrementBtn");
pageArea.appendChild(sub1Btn);
sub5Btn.textContent = "-5";
sub5Btn.classList.add("incrementBtn");
pageArea.appendChild(sub5Btn);

//and so on...

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