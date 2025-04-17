const myLibrary = [
        { title: "The Hobbit", author: "J.R.R. Tolkien", pageNum: 310 },
        { title: "1984", author: "George Orwell", pageNum: 328 }
      
];

function Book(title, author, pageNum) {
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
  this.id = crypto.randomUUID();
};

function addBookToLibrary(title, author,pageNum) {
  // take params, create a book then store it in the array
  let aBook = new Book(title, author, pageNum);
  myLibrary.push(aBook);
};

let cardDiv = document.querySelector(".card-div");
//function that loops through array and displays book on page
function displayBook() {
    cardDiv.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        //create an element
        let newCard = document.createElement("div");
        let bookInfoDiv = document.createElement("div");

         //give it card class name
        bookInfoDiv.classList.add("book-info");
        newCard.classList.add("card");

        //create text to add to card
        let bookTitle = document.createElement("h3");
        bookTitle.textContent = `${myLibrary[i].title}`;

        let bookAuthor = document.createElement("p");
        bookAuthor.textContent = `${myLibrary[i].author}`;

        let pageNumber = document.createElement("p");
        pageNumber.textContent = `${myLibrary[i].pageNum}`;

        //append 
        cardDiv.appendChild(newCard);
        newCard.appendChild(bookInfoDiv);
        bookInfoDiv.appendChild(bookTitle);
        bookInfoDiv.appendChild(bookAuthor);
        bookInfoDiv.appendChild(pageNumber);
        
    }
}

displayBook();

//event listener for submit button
let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (event) => {
    //prevent from refreshing
    event.preventDefault();
    //get form input values
    let formTitle = document.getElementById("title").value;
    let formAuthor = document.getElementById("author").value;
    let formPages = document.getElementById("page-num").value;

    let formBook = new Book(formTitle, formAuthor, formPages);
    myLibrary.push(formBook);

    cardDiv.innerHTML - "";
    displayBook();
})