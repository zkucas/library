
let container = document.querySelector(".container")
let btn = document.querySelector(".add")
let btn2 = document.querySelector(".popup-form")
let btn3 = document.querySelector(".close")
let form = document.querySelector(".form-box")

let myLibrary = [];

function Book(author, name, pages, read){
    this.author = author
    this.name = name
    this.pages = pages
    this.read = read
}


function addBookToLibrary(book){

        const newDivAuthorC = document.createElement('div');
        const newDivTitleC = document.createElement('div');
        const newDivPagesC = document.createElement('div');

        const newDivAuthor = document.createElement('p');
        const newDivTitle = document.createElement('p');
        const newDivPages = document.createElement('p');

        const newDivAuthorUser = document.createElement('p');
        const newDivTitleUser = document.createElement('p');
        const newDivPagesUser = document.createElement('p');

        newDivAuthorC.appendChild(newDivAuthor)
        newDivAuthorC.appendChild(newDivAuthorUser)
        newDivAuthorUser.classList.add('userBook') 
        newDivAuthorC.classList.add('bookParC')
        
        newDivTitleC.appendChild(newDivTitle)
        newDivTitleC.appendChild(newDivTitleUser)
        newDivTitleUser.classList.add('userBook') 
        newDivTitleC.classList.add('bookParC')
        
        newDivPagesC.appendChild(newDivPages)
        newDivPagesC.appendChild(newDivPagesUser)
        newDivPagesUser.classList.add('userBook') 
        newDivPagesC.classList.add('bookParC')


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
        removeBtn.classList.add('remBtn','button');

        const newDiv = document.createElement('div')
        newDiv.classList.add('mainDiv');

        newDivAuthor.textContent = 'Book Author:' 
        newDivTitle.textContent = 'Book Title:'
        newDivPages.textContent = 'Book Pages:' 

        newDivAuthorUser.textContent =  book.author;
        newDivTitleUser.textContent =  book.name;
        newDivPagesUser.textContent =  book.pages;

        switchinput.checked = book.read

        newDiv.appendChild(newDivAuthorC)
        newDiv.appendChild(newDivTitleC)
        newDiv.appendChild(newDivPagesC)
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
    const name = document.querySelector(".booktitle").value
    const pages = document.querySelector(".pages").value
    const read = document.querySelector(".readbox").checked

    const book = new Book(author,name,pages,read)

    myLibrary.push(book)

    addBookToLibrary(book)
}


function popup(){
    form.style.display = "flex";
    btn2.style.display = "none";
}

function popupClose(){
    form.style.display = "none";
    btn2.style.display = "flex";
}

const tempBook = new Book("Tolkien","The Hobbit", 392, true);

addBookToLibrary(tempBook)

btn2.addEventListener("click", popup)

btn3.addEventListener("click", popupClose)

btn.addEventListener("click", createForm)


