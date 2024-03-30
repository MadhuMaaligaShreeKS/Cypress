describe("Loader Test", () => {
    it("Should display loader during data loading", () => {
        // Visit the webpage containing the loader
        cy.visit("https://qa-automation-practice.netlify.app/loader");

        // Trigger an action that causes data loading (e.g., clicking a button)
        cy.get("#loader").click();

        // Verify that the loader is displayed
        cy.get("#loader").should("be.visible");
        
    });
});
