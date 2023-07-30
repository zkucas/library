
let container = document.querySelector(".container")
let btn = document.querySelector(".add")
let btn2 = document.querySelector(".popup-form")
let form = document.querySelector(".form-box")

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


        const switchDiv = document.createElement('div');
        switchDiv.classList.add('readStatus');
        const switchP = document.createElement('p');
        switchP.textContent = "Read Status:";
        const switchx = document.createElement('label');
        switchx.classList.add('switch');
        const switchinput = document.createElement('input');
        switchinput.type = "checkbox";
        const switchslider = document.createElement('span');
        switchslider.classList.add('slider');

        switchx.appendChild(switchinput)
        switchx.appendChild(switchslider)
        switchDiv.appendChild(switchP)
        switchDiv.appendChild(switchx)
      

        const removeBtn = document.createElement('button')
        removeBtn.type='button';
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remBtn');

        const newDiv = document.createElement('div')
        newDiv.classList.add('mainDiv');

        newDivAuthor.textContent = 'Book Author: ' + book.author
        newDivTitle.textContent = 'Book Title: ' + book.name
        newDivPages.textContent = 'Book Pages: ' + book.pages
        switchinput.checked = book.read


        newDiv.appendChild(newDivAuthor)
        newDiv.appendChild(newDivTitle)
        newDiv.appendChild(newDivPages)
        newDiv.appendChild(switchDiv)
        newDiv.appendChild(removeBtn)

        container.appendChild(newDiv)


        removeBtn.addEventListener('click', () =>{
            newDiv.remove();
        })
   
}


function createForm(event){

    event.preventDefault()

    const author = document.querySelector(".auth").value
    const name = document.querySelector(".title").value
    const pages = document.querySelector(".pages").value
    const read = document.querySelector(".readbox").checked

    const book = new Book(author,name,pages,read)

    myLibrary.push(book)

    addBookToLibrary(book)
}


function popup(){
    form.style.display = "flex";
}

const tempBook = new Book("Tolkien","The Hobbit", 392, true);

addBookToLibrary(tempBook)

/*addBookToLibrary('Tolkien', 'Hobbit', '293')*/

btn2.addEventListener("click", popup)


btn.addEventListener("click", createForm)


