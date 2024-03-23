describe("Any",()=>{
    it("block",()=>{
        cy.visit("https://qa-automation-practice.netlify.app/recover-password");
        cy.get("#email").type("admin@admin.com");
        cy.get("#email").should("be.visible");
    })
})