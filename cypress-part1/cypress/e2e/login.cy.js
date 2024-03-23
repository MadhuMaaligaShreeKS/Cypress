describe("Any",()=>{
  it("login",()=>{
    cy.visit("https://qa-automation-practice.netlify.app/login");
    cy.get("#email").type("admin@admin.com");
    cy.get("#password").type("admin@123");
    cy.get("#submitLoginBtn").click();
    cy.get("#message").should("contain.text","Bad credentials! Please try again! Make sure that you've registered.");
  })

  it("login",()=>{
    cy.visit("https://qa-automation-practice.netlify.app/login");
    cy.get("#email").type("ad@admin.com");
    cy.get("#password").type("admin123");
    cy.get("#submitLoginBtn").click();
    cy.get("#message").should("contain.text","Bad credentials! Please try again! Make sure that you've registered.");
  })
})