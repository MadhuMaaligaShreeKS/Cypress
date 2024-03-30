describe("File Upload Test", () => {
    it("Should upload a file", () => {
        // Visit the webpage containing the file input
        cy.visit("https://qa-automation-practice.netlify.app/file-upload");

        // Read the file contents using cy.fixture()
        cy.fixture("hi.txt").then(fileContent => {
            // Convert file content to Blob
            const blob = Cypress.Blob.binaryStringToBlob(fileContent);

            // Create a new File object
            const file = new File([blob], 'example.txt', { type: 'text/plain' });

            // Find the "Choose File" input element
            cy.get('input[type="file"]').then(input => {
                // Attach the file by triggering the input element's change event
                cy.wrap(input).trigger('change', { force: true, files: [file] });
            });
        });

        cy.get(".btn.btn-primary").click();
        cy.get(".btn.btn-primary").should("be.visible");
    });
});
