import { scrumLogin } from "../page_objects/scrumLogin";
    describe("Login test", () => {
    let loginData = {
      email: "dragana@mail.com",
      password: "test123",
    };
  
    beforeEach("visit login page", () => {
      cy.visit("/login");
      cy.url().should("include", "/login");
    });
  
    it("valid login", () => {
      cy.intercept({
        method: "POST",
        url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
      }).as("login");
  
      scrumLogin.login(loginData.email, loginData.password);
  
      cy.wait("@login").then((interception) => {
        expect(interception.response.statusCode).eq(200);
        cy.url().should("not.include", "/login");
        cy.url().should('include', '/my-organizations')
      });
    });
  });