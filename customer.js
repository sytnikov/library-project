class Customer {
    static idGen = 0 // bound to Class, not instance. Access: Customer.idGen

    #id;
    #name;
    #borrowedBooks = []; //array of isbn

    constructor(name) {
        this.#name = name;
        this.#id = idGen;
        idGen += 1
    }

    get name() { return this.#name }
    get borrowedBook() { return this.#borrowedBooks }
    get id() { return this.#id }

    borrowBook(isbn) {
        // const foundIndex = this.#borrowedBooks.findIndex(i => i === isbn)
        const isBorrowed = this.#borrowedBooks.includes(isbn)
        /* if (foundIndex > -1) {
            console.log('You ve already borrowed same Book')
            return
        } */
        if (isBorrowed) {
            console.log('You ve already borrowed same Book')
            return
        }
        this.#borrowedBooks.push(isbn)
    }

    returnBook(isbn) {
        // this.#borrowedBooks = this.#borrowedBooks.filter(i => i !== isbn)
        const foundIndex = this.#borrowedBooks.findIndex(i => i === isbn)
        this.#borrowedBooks.splice(foundIndex, 1)
    }

    /* Requirements:
- Implement getter for name and borrowedBooks
- Implement method borrowBook/returnBookBook by isbn
*/
}