describe("Any",()=>{
 it("Block",()=>{
    cy.visit("https://qa-automation-practice.netlify.app/double-click");
    cy.get("#double-click-btn").dblclick();
    cy.get("#double-click-btn").should("contain.text","Double click me");
    })
})