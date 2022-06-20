import {scrumLogin} from "../page_objects/scrumLogin"
import{board} from "../page_objects/board"

describe('boards', () => {
let validName = 'gagana'
let orgId;
beforeEach('login', () => {
    cy.visit('/login')
    scrumLogin.login('dragana@mail.com', 'test123')
    cy.url().should('not.include', '/login')
    cy.visit('/my-organizations')
    cy.url().should('include', '/my-organizations')
})
  it('create board', () => {
    cy.intercept({
        method: 'POST',
        url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
    }).as('createBoard')
   
    cy.visit(
      `https://cypress.vivifyscrum-stage.com/organizations/${orgId}/boards`
    );
    
    board.newBoard(validName);
    cy.wait('@createBoard').then((interception) => {
        expect(interception.response.statusCode).eq(200)
        expect(interception.response.statusCode).to.exist

    })

  })
})