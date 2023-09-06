class Product {
    /*     title;
        price;
        description;
        category; */
    #title;
    #description;
    #price;
    #category;

    constructor(title, price, description, category) {
        this.#category = category
        this.#title = title
        this.#price = price
        this.#description = description
    }

    discountPrice(percentage) {
        this.#price = this.#price * (1 - percentage)
    }

    get price() {
        return this.#price
    }

    set price(value) {
        if (value < 0) {
            throw new Error("price cannot be negative")
        } else {
            this.#price = value
        }
    }

    get category() { return this.#category }

    #printInfo() { return `product info: ${this.#title}, ${this.#description}` }
    printInfo(extra) { return `product info: ${this.#title}, ${this.#description} ${extra}` }
    /*     getPrice() {
            return this.#price
        } */
}

const product1 = new Product('Shirt', 30, 'cotton shirt', 'clothes')
const product2 = new Product('Trouser', 50, 'cotton trouser', 'clothes')
// console.log('check running speed of product1', product1.checkRunningSpeed())
// product1.discountPrice(0.1)
/* const newPrice = -10
if (newPrice < 0) {
    throw new Error("price cannot be negative")
} else {
    product1.#price = newPrice
} */
// console.log(product1, product2)

// console.log(product1.getPrice())

// product1.price = -20
// console.log(product1.price)

// console.log(product1.printInfo())

class Shoe extends Product {
    #heel
    #waterproof

    constructor(title, price, description, category, heel, waterproof=false) {
        super(title, price, description, category)
        this.#heel = heel
        this.#waterproof = waterproof
    }

    checkRunningSpeed() {
        if (this.category === "sport shoes") return 40
        else return 30
    }
}

const shoe1 = new Shoe('Nike shoe', 100, 'sport shoes', 'sport shoes', false, true)
console.log(shoe1.check)
