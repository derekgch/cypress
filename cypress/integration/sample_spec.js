describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(false)
    })
  })

describe('my second test', function(){
    it('Visits google', ()=>{
        cy.visit('https://google.com');
        cy.get('.gLFyf').type("what").type('{enter}');
        cy.url().should('include', 'google.com', 'what');
    })

})