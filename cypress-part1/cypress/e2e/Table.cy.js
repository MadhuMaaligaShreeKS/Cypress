describe("Table Test", () => {
    it("Should verify table content", () => {
      // Visit the webpage containing the table
      cy.visit("https://qa-automation-practice.netlify.app/web-table");
  
      // Assert the table exists
      cy.get("#peopleTable").should("exist");
  
      // Assert the table contains specific data
      cy.contains("#peopleTable", "1").should("exist");
      cy.contains("#peopleTable", "Mark").should("exist");
      cy.contains("#peopleTable", "Otto").should("exist");
      cy.contains("#peopleTable", "mo@email.com").should("exist");
  
    });
  });
  