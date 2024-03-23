describe("Any",()=>{
    it("login",()=>{
      cy.visit("https://qa-automation-practice.netlify.app/register");
      cy.get("#firstName").type("AAAa");
      cy.get("#lastName").type("B B");
      cy.get("#phone").type("123-456-7890");
      cy.get("#countries_dropdown_menu").type("{downarrow}");
      cy.get("#emailAddress").type("admin@admin.com");
      cy.get("#password").type("admin123");
      cy.get("#exampleCheck1").check();
      cy.get("#phone").clear();
      cy.get("#registerBtn").click();
      cy.get("#message").should("contain.text","The account has been successfully created!");
      cy.get("#message").should("be.visible");
      
    })
})