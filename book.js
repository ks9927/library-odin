let myLibrary = [
        { title: "The Hobbit", author: "J.R.R. Tolkien", pageNum: 310 },
        { title: "1984", author: "George Orwell", pageNum: 328 }
      
];

function Book(title, author, pageNum) {
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
  this.id = crypto.randomUUID();
  this.read = false;
};

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

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
        let readDiv = document.createElement("div");
        let readLabel = document.createElement("label");
        let readCheck = document.createElement("input");
        let deleteBtn = document.createElement("button");
         //give it card class name
        bookInfoDiv.classList.add("book-info");
        newCard.classList.add("card");
        readDiv.classList.add("read-checkmark");
        readLabel.classList.add("read-label")
        readCheck.type = "checkbox";
        deleteBtn.classList.add("delete-btn");

        //create text to add to card
        let bookTitle = document.createElement("h3");
        bookTitle.textContent = `${myLibrary[i].title}`;

        let bookAuthor = document.createElement("p");
        bookAuthor.textContent = `${myLibrary[i].author}`;

        let pageNumber = document.createElement("p");
        pageNumber.textContent = `${myLibrary[i].pageNum}`;

        readLabel.textContent = "Read?";
        deleteBtn.textContent = "Delete Book";

        //book ID
        deleteBtn.setAttribute("data-id", myLibrary[i].id);

        //checkbox
        readCheck.checked = myLibrary[i].read;

        //append 
        cardDiv.appendChild(newCard);
        newCard.appendChild(bookInfoDiv);
        newCard.appendChild(readDiv);
        bookInfoDiv.appendChild(bookTitle);
        bookInfoDiv.appendChild(bookAuthor);
        bookInfoDiv.appendChild(pageNumber);
        readDiv.appendChild(readLabel);
        readDiv.appendChild(readCheck);
        newCard.appendChild(deleteBtn);

        //event listener for delete btn
        deleteBtn.addEventListener("click", (event) => {
            let bookId = event.target.getAttribute("data-id");
            removeBookFromLibrary(bookId);
        });

        //checkbox event listener
        readCheck.addEventListener("change", () => {
            myLibrary[i].toggleRead(); // Use the prototype method to toggle read status
        });
        
    }
}

displayBook();

function removeBookFromLibrary(bookId) {
    // Find the book by ID and remove it from the array
    myLibrary = myLibrary.filter(book => book.id !== bookId);
    displayBook(); // Refresh the display
}

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

    cardDiv.innerHTML = "";
    displayBook();
});
