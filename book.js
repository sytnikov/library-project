export class Book {
    #title;
    #author;
    #isbn;
    #isCheckedOut;

    constructor(title, author, isbn) {
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
        this.#isCheckedOut = false;
    }

    get title() { return this.#title }
    get author() { return this.#author }
    get isbn() { return this.#isbn }
    get isCheckedOut() { return this.#isCheckedOut }
    
    set isCheckedOut(value) {
        if (typeof value === 'boolean') {
            this.#isCheckedOut = value
        } else {
            throw new Error('invalid value for isCheckedOut')
        }
    }

    bookInfo() {
        return {title: this.#title, author: this.#author, isbn: this.#isbn, isCheckedOut: this.#isCheckedOut}
    }
    

    /* Requirements:
- Implement getters for title, author, isbn, and isCheckedOut.
- Implement a setter for isCheckedOut.
 */
}