describe("Tech Quiz", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/"); // Replace with your app's actual URL
  });

  it("should display the title text on the screen", () => {
    cy.contains('h1', 'Python Questions').should("be.visible"); // Ensure the title is displayed
  });



  it("should start the quiz when the start button is clicked", () => {
    // GIVEN I am taking a tech quiz
    // WHEN I click the start button
    cy.contains('button', 'start quiz').click();

    // THEN the quiz starts and I am presented with a question
    cy.contains('h2', 'question 1').should('be.visible');
  });

  it("should present the next question when a question is answered", () => {
    // WHEN I answer a question
    cy.contains('button', 'start quiz').click();
    cy.contains('button', 'answer option 1').click();

    // THEN I am presented with another question
    cy.contains('h2', 'question 2').should('be.visible');
  });

  it("should display the quiz results after all questions are answered", () => {
    // Simulate completing the quiz
    cy.contains("button",'start quiz').click();

    // Answer all questions (assuming 3 questions for simplicity)
    // cy.get('button', { name: /answer option 1/i }).click();
    // cy.get('button', { name: /answer option 2/i }).click();
    // cy.get('button', { name: /answer option 3/i }).click();
    cy.contains("button", "answer option 1").click();
    cy.contains("button", "answer option 2").click();
    cy.contains("button", "answer option 3").click();
    // THEN the quiz is over
    cy.contains(/quiz completed/i).should("be.visible");

    // THEN I can view my score
    cy.contains(/your score:/i).should("be.visible");
  });

  it("should allow restarting the quiz after it is completed", () => {
    // Complete the quiz

    cy.contains("button", "start quiz").click();
    cy.contains("button", "answer option 1").click();
    cy.contains("button", "answer option 2").click();
    cy.contains("button", "answer option 3").click();
    // THEN the quiz is over
    cy.contains(/quiz completed/i).should("be.visible");

    // WHEN the quiz is over
    // THEN I can start a new quiz
    cy.contains("button", "start new quiz").click();
    cy.contains("heading", "question1").should("be.visible");
  });
});

// cy.contains('type').click()

// // Should be on a new URL which
// // includes '/commands/actions'
// cy.url().should('include', '/commands/actions')

// // Get an input, type into it
// cy.get('.action-email').type('fake@email.com')

// //  Verify that the value has been updated
// cy.get('.action-email').should('have.value', 'fake@email.com')
