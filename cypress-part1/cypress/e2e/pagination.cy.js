describe("Pagination Test", () => {
    it("Should navigate through pages", () => {
        // Visit the webpage containing pagination
        cy.visit("https://qa-automation-practice.netlify.app/pagination");

        // Assert that the first page is loaded by default
        cy.get(".page-link").contains("1").should("exist");

        // Click on the pagination link for page 2
        cy.contains(".page-link", "2").click();

        // Assert that the second page is loaded
        cy.get(".page-link").contains("2").should("exist");
    });
});
