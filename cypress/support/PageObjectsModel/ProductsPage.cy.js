class ProductsPage {
    addToCart(eltLocator) {
        cy.get(eltLocator)
            .click()
    }
    
    getTitle(eltLocator) {
        return cy.get(eltLocator)
    }

    getPrice(eltLocator) {
        return cy.get(eltLocator)
    }

    openCart() {
        cy.get('#shopping_cart_container')
            .click()
    }
}
export default ProductsPage