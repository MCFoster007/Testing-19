
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
  });
})
describe('Tech Quiz E2E Test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
    cy.visit('/');
  });

  it('should start the quiz and complete it successfully', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Go through each question
    cy.fixture('questions.json').then((questions) => {
      questions.forEach((question, index) => {
        cy.get('h2').should('contain.text', question.question);
        cy.get('button').contains((index + 1).toString()).click();
      });

      // Ensure quiz completion message appears
      cy.get('h2').should('contain.text', 'Quiz Completed');
      cy.get('.alert-success').should('contain.text', `Your score: ${questions.length}/${questions.length}`);
    });
  });

  it('should allow retaking the quiz after completion', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Complete the quiz
    cy.fixture('questions.json').then((questions) => {
      questions.forEach((_, index) => {
        cy.get('button').contains((index + 1).toString()).click();
      });

      // Retake the quiz
      cy.get('button').contains('Take New Quiz').click();
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  });
});