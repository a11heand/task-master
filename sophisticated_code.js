/*********************************************
* Filename: sophisticated_code.js
* Description: 
*   This code demonstrates a complex and elaborated JavaScript program that implements a virtual library system, including book management, user management, and borrowing functionality.
*********************************************/

// CONSTANTS
const MAX_BOOKS_ALLOWED = 5; // Maximum number of books allowed for a user
const MAX_BORROWING_DAYS = 14; // Maximum borrowing days for a book
const FINE_PER_DAY = 1.5; // Fine per day for a late return

// Book class
class Book {
  constructor(title, author, genre, isbn, copies) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
    this.copies = copies;
    this.availableCopies = copies;
  }
  
  borrowBook() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      return true;
    }
    return false;
  }
  
  returnBook() {
    if (this.availableCopies < this.copies) {
      this.availableCopies++;
      return true;
    }
    return false;
  }
}

// User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.borrowedBooks = [];
  }
  
  borrowBook(book) {
    if (this.borrowedBooks.length < MAX_BOOKS_ALLOWED && book.borrowBook()) {
      this.borrowedBooks.push(book);
      return true;
    }
    return false;
  }
  
  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1 && book.returnBook()) {
      this.borrowedBooks.splice(index, 1);
      return true;
    }
    return false;
  }
  
  checkFine(book) {
    const borrowingDate = this.borrowedBooks.find(b => b === book).borrowingDate;
    const daysLate = Math.round((new Date() - borrowingDate) / (1000 * 60 * 60 * 24));
    if (daysLate > MAX_BORROWING_DAYS) {
      return (daysLate - MAX_BORROWING_DAYS) * FINE_PER_DAY;
    }
    return 0;
  }
}

// Library class
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.users = [];
  }
  
  addBook(book) {
    this.books.push(book);
  }
  
  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      return true;
    }
    return false;
  }
  
  addUser(user) {
    this.users.push(user);
  }
  
  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
  
  getBooksByGenre(genre) {
    return this.books.filter(book => book.genre === genre);
  }
}

// Create library instance
const library = new Library("My Library");

// Create books
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "Classics", "9780316769174", 5);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Classics", "9780061120084", 3);
const book3 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "Fantasy", "9781408855652", 7);
const book4 = new Book("1984", "George Orwell", "Science Fiction", "9780451524935", 4);
const book5 = new Book("Pride and Prejudice", "Jane Austen", "Romance", "9780141439518", 6);

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

// Create users
const user1 = new User("John Doe", "john.doe@example.com");
const user2 = new User("Jane Smith", "jane.smith@example.com");
const user3 = new User("Bob Johnson", "bob.johnson@example.com");

// Add users to the library
library.addUser(user1);
library.addUser(user2);
library.addUser(user3);

// User borrows books
user1.borrowBook(book1);
user1.borrowBook(book2);
user2.borrowBook(book3);
user3.borrowBook(book2);

// User returns books
user1.returnBook(book1);
user2.returnBook(book3);

// Calculate fine
console.log(`Late fine for User 1's book: $${user1.checkFine(book2).toFixed(2)}`);

/*********************************************
* The code above demonstrates a virtual library system with book management, user management, and borrowing functionality. It consists of several class definitions for books, users, and the library itself.
* The program provides methods for borrowing and returning books, checking availability, and calculating late fines. It also has functions to list books by genre.
* This code showcases complex object-oriented design, emphasizing encapsulation and data integrity.
*********************************************/