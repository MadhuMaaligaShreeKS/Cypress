describe("Any",()=>{
    it("Block",()=>{
       cy.visit("https://qa-automation-practice.netlify.app/dropdowns");
       cy.get("#dropdown-menu").select("India");
       cy.get("#multi-level-dropdown-btn").click();
       cy.contains(".dropdown-menu a", "Some action").click();
       })
   })