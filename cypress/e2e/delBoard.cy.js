import { scrumLogin } from "../page_objects/scrumLogin";
import { board } from "../page_objects/board";
import{organization} from"../page_objects/organization";
import { deleteBoard } from "../page_objects/deleteBoard";

describe('delete board', () => {
    let boardName = 'gagana';
    let boardId;

    before('login', () => {
        cy.visit('/')
        scrumLogin.login('dragana@mail.com', 'test123')
        cy.url().should('not.include', '/login')
        organization.create('dragana23')
        board.newBoard('gagana')
        cy.url().should('include', '/boards')
        
    })
    it('delete board', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress.vivifyscrum-stage.com/boards'
        }).as('deleteBoard')
        cy.visit(
            `https://cypress.vivifyscrum-stage.com/boards/${boardId}/settings`
          );
        
        deleteBoard.boardDelete(boardName)
        cy.wait('@deleteBoard').then(interception => {
            boardId = interception.response.body.id
            expect(interception.response.body.name).not.eq(boardName)
            expect(interception.response.statusCode).to.exist
            cy.url().should('include', '/organizations')
        })
    })
})