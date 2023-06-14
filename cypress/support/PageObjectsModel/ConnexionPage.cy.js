class ConnexionPage {
    loginWith(username, password) {
        cy.get('#user-name')
            .type(username).should('have.value', username)
        
        cy.get('#password')
            .type(password).should('have.value', password)
        
        cy.get('#login-button')
            .click()        
    }
}
export default ConnexionPage