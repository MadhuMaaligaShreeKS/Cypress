describe("Date Picker Test", () => {
    it("Should select a date from the date picker", () => {
        // Visit the webpage containing the date picker
        cy.visit("https://qa-automation-practice.netlify.app/calendar");

        // Get the date picker input field and type the date
        cy.get("#calendar").type("11/27/2002");
        cy.get("#range-date-calendar").clear();

        // Verify that the date is selected
        cy.get("#calendar").should("have.value", "11/27/2002");

        cy.get("#range-date-calendar").type("11/27/2002");

        // Verify that the date is selected
        cy.get("#range-date-calendar").should("have.value", "11/27/2002");
    });
});
