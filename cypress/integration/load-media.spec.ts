describe('Load media', () => {
  it('load media and navigate between page', () => {
    cy.intercept('https://graphql.anilist.co/*').as('getMedia')
    cy.visit('/')
    cy.contains('Anime Videos')

    cy.get(
      '.main > .card > .card-search > app-main-search-box > .ng-untouched'
    ).click()

    cy.get(
      '.main > .card > .card-search > app-main-search-box > .ng-untouched'
    ).type('kungfu')

    // load first page
    // show placeholder while waiting
    cy.get('.collection-item__description').should('have.class', 'placeholder')
    // show real data and not placeholder
    cy.get('.collection-item__description').should(
      'not.have.class',
      'placeholder'
    )
    cy.get(
      '.card-footer > app-pagination-bar > .pagination > .page-number-1'
    ).should('have.class', 'active')

    // load second page
    cy.get(
      '.card-footer > app-pagination-bar > .pagination > .page-number-2 > a'
    ).click()
    // show placeholder while waiting
    cy.get('.collection-item__description').should('have.class', 'placeholder')
    // show real data and not placeholder
    cy.get('.collection-item__description').should(
      'not.have.class',
      'placeholder'
    )
    cy.get(
      '.card-footer > app-pagination-bar > .pagination > .page-number-2'
    ).should('have.class', 'active')

    // load last page
    cy.get(
      'app-pagination-bar > .pagination > .btn-skip-next > a > .material-icons'
    ).click()
    // show placeholder while waiting
    cy.get('.collection-item__description').should('have.class', 'placeholder')
    // show real data and not placeholder
    cy.get('.collection-item__description').should(
      'not.have.class',
      'placeholder'
    )
    cy.get(
      '.card-footer > app-pagination-bar > .pagination > .btn-skip-next'
    ).should('have.class', 'disabled')

    // back to first page
    cy.get(
      'app-pagination-bar > .pagination > .btn-skip-previous > a > .material-icons'
    ).click()
    // no placeholder because it call form cache
    cy.get('.collection-item__description.placeholder').should('not.exist')
    // show real data and not placeholder
    cy.get('.collection-item__description').should(
      'not.have.class',
      'placeholder'
    )
    cy.get(
      '.card-footer > app-pagination-bar > .pagination > .page-number-1'
    ).should('have.class', 'active')
  })
})
