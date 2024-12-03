describe("Quiz Test", () => {
  it("Loads the quiz question successfully", () => {
    cy.visit("http://localhost:3001");

    // Start the quiz
    cy.contains("Start Quiz").click();

    // Validate that the question is displayed
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });

  it("Should take answers to questions and complete quiz", () => {
    cy.visit("http://localhost:3001");

    // Start the quiz
    cy.contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").should("be.visible").click();
    }
    // CHECKS IF THE QUIZ IS COMPLETED
    cy.get(".alert-success").should("be.visible").contains("Your score:")
    
  });
});
//NO MORE CODE GOES AFTER THIS LINE
