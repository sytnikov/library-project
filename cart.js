class Cart{
    #products;
    constructor()
    {
        this.#products = []
    }
    addProduct(product)
    {
        /* check the existance of that product
        - if exist, increase amount
        - if not, add it
         */
        this.#products.push(product)
    }
    removeProduct(product)
    {

    }
    
    #checkExsitance(product) {
        return this.#products.find(p => p.id ===product.id)
    }
}