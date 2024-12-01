
describe('Quiz Test', () => {
  it('Loads the quiz question successfully', () => {
     cy.visit("http://localhost:3001");

     // Start the quiz
     cy.contains("Start Quiz").click();

     // Wait for the question to appear
     cy.contains("Which of the following is a valid variable name in Python?", { timeout: 10000 });

     // Validate that the question is displayed
     cy.get('.question').should('be.visible');
  });
});


// describe('My First Test', () => {
//   it('Gets, contains, types and asserts', () => {
//     cy.visit("http://localhost:3001/")

//     cy.contains('Start Quiz').click()

//     cy.contains('Which of the following is a valid variable name in Python?').click()

//     // Get an input, type into it
//     cy.contains('.answer').type('2')

//     //  Verify that the value has been updated
//     cy.get('.answer').should('have.value', 'variable_1')
//   })
// })
