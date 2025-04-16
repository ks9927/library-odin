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
    for(let i = 0; i < myLibrary.length; i++) {
        //create a card
        let newCard = document.createElement("div");
        //give it card class name
        newCard.classList.add("card");
        //append to main
        cardDiv.appendChild(newCard);
    }
}

displayBook();