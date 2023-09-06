import { Book } from './book.js'

export class LibBook extends Book {
  #stock
  constructor(title, author, isbn, stock) {
    super(title, author, isbn)
    this.#stock = stock
  }

  get stock() { return this.#stock }
}

export class Library {
  #books;
  #customers;

  constructor() {
    this.#books = {}; //key : isbn, value: actual libbook object
    this.#customers = []
  }

  get books() {
    return this.#getDeepCopy(Object.values(this.#books).map(book => book.bookInfo()))
  }

  get customers() { return this.#getDeepCopy(Object.values(this.#customers)) }

  addBook(book) {
    if (Object.keys(this.#books).includes(book.isbn)) {
      this.#books[book.isbn].stock += book.stock
    } else {
      this.#books[book.isbn] = book
    }
  }

  addCustomer(customer) {
    if (this.#customers.includes(c => c.id === customer.id)) {
      console.log('Customer is already added')
      return
    }
    this.#customers.push(customer)
  }

  removeBook(isbn, amount = 1) {
    if (Object.keys(this.#books).includes(book.isbn)) {
      /* if/else check ??? */
      this.#books[book.isbn].stock -= amount
    } else {
      console.log('Book is not found')
    }
  }

  searchBook(search) {
    return Object.values(this.#books).filter(book =>
      book.author.toLowerCase().includes(search.toLowerCase())
      ||
      book.title.toLowerCase().includes(search.toLowerCase()))
  }

  checkOutBook(bookId, customerId) {
    /* check if isbn exist && stock > 0 && customerId exist ? */
    const foundCustomer = this.#customers.find()
    /* 
    - add book isbn into borrowedBooks of customer
    - reduce book stock
    - change status of the book -> isBorrowed true ??? does book need unique id?*/
  }

  #getDeepCopy(data) {
    return JSON.parse(JSON.stringify(data))
  }

  /* Requirements:
- Implement getter for books array 
- Implement method addBook/removeBook to insert or remove a new book in book array
- Create a method search to return books with titles or authors that match the provided search keyword.
- Implement methods checkOutBook and returnBook by isbn and customer.
*/
}
