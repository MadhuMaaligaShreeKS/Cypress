describe("Any",()=>{
    it("Block",()=>{
       cy.visit("https://qa-automation-practice.netlify.app/mouse-hover");
       cy.get("#button-hover-over").trigger('mouseover');
       cy.get("#button-hover-over").should("contain.text","Hover over me, example no.2");
     
       })
   })