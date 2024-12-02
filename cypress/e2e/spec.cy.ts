describe("Quiz Test", () => {
  it("Loads the quiz question successfully", () => {
    cy.visit("http://localhost:3001");

    // Start the quiz
    cy.contains("Start Quiz").click();

    // Validate that the question is displayed
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });
  //next test goes here
  //
  it("Click the button to start", () => {
  cy.get("button").click();
});
//NO MORE CODSES GOES AFTER THIS LINE
