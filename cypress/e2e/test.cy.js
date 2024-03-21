/// <reference types="cypress"/>

it('GoogleSearch', () => {
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
})