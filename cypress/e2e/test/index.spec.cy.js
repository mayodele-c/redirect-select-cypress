describe('page redirect', () => {
  it('select tag', () => {
    cy.visit('/')
    cy.get('[href="http://elementalselenium.com/"]').should('be.visible')
    .invoke('removeAttr', 'target').click()
    //Seems we can run page redirect without using cy.origin
    cy.get('#email').should('be.visible').type('gambie@mail.com')

    //select in cypress
    cy.get('select').should('be.visible').select('Python')
    cy.get("input[type = 'submit']").click()

  //cy origin to direct the page to the new domain in the same screen
    // cy.origin('https://elementalselenium.com/' , ()=>{
    // cy.log('Page load succesfully.')
    // cy.get('#email').should('be.visible').type('gambie@mail.com')


    // })
  })
})