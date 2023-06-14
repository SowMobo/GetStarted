import ConnexionPage from '../../support/PageObjectsModel/ConnexionPage.cy'
import ProductsPage from '../../support/PageObjectsModel/ProductsPage.cy.js'

describe('Test order a Item from Swag Labs site', () => {
    const connexionPage = new ConnexionPage();
    const productsPage = new ProductsPage();

    beforeEach('open Swag Labs ', () =>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Orders two items from Products page', () => {
        connexionPage.loginWith('performance_glitch_user', 'secret_sauce')

        cy.get('.app_logo')
            .should('have.text','Swag Labs')
        
        productsPage.addToCart('#add-to-cart-sauce-labs-bolt-t-shirt')
        productsPage.addToCart('#add-to-cart-sauce-labs-fleece-jacket')
        cy.get('.shopping_cart_badge')
            .should('have.text', '2')
        
        productsPage.openCart()
            
    })
})