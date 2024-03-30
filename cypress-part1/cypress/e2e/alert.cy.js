describe("Button Click Alert Test", () => {
    it("Should handle alert after clicking the button", () => {
        // Visit the webpage containing the button
        cy.visit("https://qa-automation-practice.netlify.app/alerts");

        // Spy on window.alert
        cy.window().then(win => {
            cy.spy(win, "alert").as("alert");
        });

        // Click the button that triggers the alert
        cy.get("#alert-btn").click();

        // Verify that the alert was called
        cy.get("@alert").should("have.been.calledWith", "Hello! I am an alert box!!");

        cy.get("#confirm-btn").click();

    });
});
