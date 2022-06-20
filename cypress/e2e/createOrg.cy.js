import { organization } from "../page_objects/organization";
import {scrumLogin} from "../page_objects/scrumLogin";

describe("Create Organization test", () => {
    let organizationData = {
      name: "dragana1",
      image:
      'https://tinypng.com/images/social/website.jpg',
    };
    beforeEach("visit my organizations page", () => {
      cy.visit("/login");
      scrumLogin.login('dragana@mail.com', 'test123');
      cy.url().should('not.include', '/login'),
      cy.visit("/my-organizations");
      cy.url().should("include", "/my-organizations");
    });
  
    it("create organization without image", () => {
      cy.intercept({
        method: "POST",
        url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
      }).as("create");
  
      organization.create(organizationData.name);
  
      cy.wait("@create").then((interception) => {
        expect(interception.response.statusCode).eq(201);
        expect(interception.response.body.name).eq(organizationData.name)
        cy.url().should('include', '/my-organizations')
      });
    });
});