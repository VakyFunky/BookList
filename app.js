// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class: handle UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book 1',
                author: 'Jonh Doe',
                isbn: '123456'
            },
            {
                title: 'Book 2',
                author: 'Micke Bell',
                isbn: '789654'
            }
        ];

        const books = StoredBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">x</td>
        `;

        list.appendChild(row);
    }
}


// Store Class: handless storages

// Event: Display 
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a book
document.querySelector('#book-form').addEventListener('submit',(e) =>{
    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // instatiate book
    const book = new Book(title, author, isbn);

    console.log(book);
})

// Event: remove a book