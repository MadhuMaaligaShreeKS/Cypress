describe("any",()=>{
    it("block",()=>{
        cy.visit("https://qa-automation-practice.netlify.app/window");
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen')
          })
        cy.get("#newWindowBtn").click();
        cy.get('@windowOpen').should('be.calledWith', 'web-table.html');
    })
})