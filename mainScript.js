const displayArea = document.querySelector("main");
const openModalBtn = document.querySelector("[data-modal-target]");
const closeModalBtn = document.querySelector("[data-close-Btn]");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const form = document.querySelector("form");

//TODO:
//Button increment
//status to read
//Update card to show these
//Style

let myLibrary = [];
let objId = null;

function Book(title, author, pages, pagesRead, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = ++objId;

    if (pagesRead === null || pagesRead === "") {
        this.pagesRead = 0;
    } else {
        this.pagesRead = pagesRead;
    }
}

function getBook() {
    const titleInput = document.getElementById("title").value;
    const authorInput = document.getElementById("author").value;
    const pagesInput = document.getElementById("pages").value;
    let pagesReadInput = document.getElementById("pagesRead").value;
    pagesReadInput = parseInt(pagesReadInput);
    const isReadInput = document.getElementById("isRead").checked;

    return new Book(titleInput,authorInput,pagesInput,pagesReadInput,isReadInput)
}

function addToLibrary(newBook) {
    myLibrary.push(newBook);
    createCardForBook(newBook);
}

function refreshGrid() {
    clearGrid();
    for (let selectedBook of myLibrary) {
        createCardForBook(selectedBook);
    }
}

function createCardForBook(book) {
    const card = document.createElement("div");
    const bookName = document.createElement("h2");
    const bookAuthor = document.createElement("h3");
    const pageArea = document.createElement("div");
    const sub1Btn = document.createElement("button");
    const sub5Btn = document.createElement("button");
    const add5Btn = document.createElement("button");
    const add1Btn = document.createElement("button");
    const numberArea = document.createElement("div");
    const numberDisplay = document.createElement("p");
    const buttonArea = document.createElement("div");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");

    card.classList.add("bookCard");
    displayArea.appendChild(card);
    bookName.textContent = `${book.title}`;
    card.appendChild(bookName);
    bookAuthor.textContent = `${book.author}`;
    card.appendChild(bookAuthor);

    pageArea.classList.add("pageArea");
    card.appendChild(pageArea);
    sub1Btn.textContent = "-1";
    sub1Btn.classList.add("incrementBtn");
    pageArea.appendChild(sub1Btn);
    sub5Btn.textContent = "-5";
    sub5Btn.classList.add("incrementBtn");
    pageArea.appendChild(sub5Btn);
    add5Btn.textContent = "+5";
    add5Btn.classList.add("incrementBtn");
    pageArea.appendChild(add5Btn);
    add1Btn.textContent = "+1";
    add1Btn.classList.add("incrementBtn");
    pageArea.appendChild(add1Btn);

    numberArea.classList.add("numberArea");
    card.appendChild(numberArea);
    numberDisplay.textContent = `${book.pagesRead}/${book.pages}`;
    numberArea.appendChild(numberDisplay);

    buttonArea.classList.add("buttonArea");
    card.appendChild(buttonArea);
    readButton.textContent = "Read";
    readButton.classList.add("readBtn");
    buttonArea.appendChild(readButton);
    removeButton.textContent = "Remove";
    removeButton.classList.add("removeBtn");
    buttonArea.appendChild(removeButton);


    removeButton.onclick = () => {
        removeSelectedBook(book);
        refreshGrid();
    }

    sub5Btn.onclick = () => {
        subtractPages(book, 5);
        refreshGrid();
    }

    sub1Btn.onclick = () => {
        subtractPages(book, 1);
        refreshGrid();
    }

    add1Btn.onclick = () => {
        console.log(book.pagesRead);
        addPages(book, 1);
        refreshGrid();
    }

    add5Btn.onclick = () => {
        addPages(book, 5);
        refreshGrid();
    }
}

function removeSelectedBook(selectedBook) {
    let index = myLibrary.findIndex((element) => element.id === selectedBook.id);
    myLibrary.splice(index, 1);
}

function subtractPages(selectedBook, amount) {
    selectedBook.pagesRead -= amount;
    if (selectedBook.pagesRead < 0) {
        selectedBook.pagesRead = 0;
    }
}

function addPages(selectedBook, amount) {
    selectedBook.pagesRead += amount;
    if (selectedBook.pagesRead > selectedBook.pages) {
        selectedBook.pagesRead = selectedBook.pages;
    }
}

function clearGrid() {
    displayArea.innerHTML = "";
}

function openModal(modal) {
    if (modal == null) return
    modal.classList.add("active");
    overlay.classList.add("active");

}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove("active");
    overlay.classList.remove("active");

}

openModalBtn.addEventListener("click", () => {
    openModal(modal);
});

closeModalBtn.addEventListener("click", () => {
    closeModal(modal);
});

overlay.addEventListener("click", () => {
    closeModal(modal);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToLibrary(getBook());
    closeModal(modal);
    form.reset();
});