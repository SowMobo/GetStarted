import ConnexionPage from '../../support/PageObjectsModel/ConnexionPage.cy.js'

describe('Tests connexion to Swag Lab site', () =>{
    // Create a ConnexionPage object
    const connexion = new ConnexionPage();
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    
    })

    it('Test valid connexion', () => {
        // cy.get('#user-name')
        //     .type('standard_user').should('have.value', 'standard_user')
        
        // cy.get('#password')
        //     .type('secret_sauce').should('have.value','secret_sauce')
        
        // cy.get('#login-button')
        //     .click()
        connexion.loginWith('standard_user', 'secret_sauce')

        cy.get('.app_logo')
            .should('have.text','Swag Labs')
    })

    it('Test invalid username connexion', () => {

        // cy.get('#user-name')
        //     .type('locked_out_user').should('have.value', 'locked_out_user')
        
        // cy.get('#password')
        //     .type('secret_sauce').should('have.value','secret_sauce')
        
        // cy.get('#login-button')
        //     .click()
        connexion.loginWith('locked_out_user', 'secret_sauce')

        cy.get('.error-message-container.error')
            .should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })
}) 