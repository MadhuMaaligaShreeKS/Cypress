describe("Any",()=>{
    it("Block",()=>{
       cy.visit("https://qa-automation-practice.netlify.app/scroll");
       cy.get("#sidebarCollapse").scrollTo("top", { ensureScrollable: false });
       cy.get("#sidebarCollapse").scrollTo("bottom", { ensureScrollable: false });
       })
   })