/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/ ')
    cy.injectAxe()
  })

  it('Exibe resultado dos testes visualmente', () => {
    cy.get('#search_query_top')
      .type('Blouse')

    cy.checkA11y()
  })
})
