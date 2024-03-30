import 'cypress-iframe';
describe("Any",()=>{
    it("Block",()=>{
       cy.visit("https://qa-automation-practice.netlify.app/iframe");
       cy.iframe("#iframe-checkboxes").then(iframe => {
        // Find the button within the iframe and scroll to it
        cy.get("#sidebarCollapse", { within: iframe }).scrollIntoView();
        
        // Click on the Learn More button within the iframe
        iframe.find("#learn-more").click();
        
    })
  })
})