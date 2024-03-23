describe("any",()=>{
    it("block",()=>{
        cy.visit("https://qa-automation-practice.netlify.app/tab");
        cy.get("#newTabBtn").click();
        cy.get("#newTabBtn a").should('have.attr', 'href', '/web-table');  // Verify target URL
        cy.get("#newTabBtn a").should('have.attr', 'target', '_blank');
    })
})