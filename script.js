
let container = document.querySelector(".container")
let btn = document.querySelector(".add")

let myLibrary = [];

function Book(author, name, pages, read){
    this.author = author
    this.name = name
    this.pages = pages
    this.read = read
}


function addBookToLibrary(book){
        const newDivAuthor = document.createElement('p');
        const newDivTitle = document.createElement('p');
        const newDivPages = document.createElement('p');

        const newCheckbox = document.createElement('INPUT');
        newCheckbox.setAttribute("type", "checkbox");
        const checkBoxLabel = document.createElement('label');
        checkBoxLabel.appendChild(document.createTextNode('Have read it!'))

        const newDiv = document.createElement('div')

        newDivAuthor.textContent = 'Book Author: ' + book.author
        newDivTitle.textContent = 'Book Title: ' + book.name
        newDivPages.textContent = 'Book Pages: ' + book.pages


        newDiv.appendChild(newDivAuthor)
        newDiv.appendChild(newDivTitle)
        newDiv.appendChild(newDivPages)
        newDiv.appendChild(newCheckbox)
        newDiv.appendChild(checkBoxLabel)

        container.appendChild(newDiv)
   
}


function createForm(event){

    event.preventDefault()

    const author = document.querySelector(".auth").value
    const name = document.querySelector(".title").value
    const pages = document.querySelector(".pages").value

    const book = new Book(author,name,pages)

    myLibrary.push(book)

    addBookToLibrary(book)
}

const tempBook = new Book("Tolkien","The Hobbit", 392);

addBookToLibrary(tempBook)

/*addBookToLibrary('Tolkien', 'Hobbit', '293')*/

btn.addEventListener("click", createForm)


