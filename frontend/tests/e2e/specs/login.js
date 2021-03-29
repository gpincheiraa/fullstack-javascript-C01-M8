/// <reference types="Cypress" />

describe("login test suite", () => {
  it("does not work with wrong credentials", () => {
    cy.visit("/");
    cy.get("[data-cy=sign-in]").click();
    cy.hash().should("equal", "#/login");

    cy.get("[data-cy=username]").type("info");
    cy.get("[data-cy=password]").type("visitor");
    cy.get("[data-cy=login-form]").submit();

    cy.contains(".error-messages li", "email or password is invalid");
    cy.hash().should("equal", "#/login");
  });

  it("happy path test", () => {
    // Get registered user from env
    const user = Cypress.env("user");

    cy.visit("http://localhost:4100");
    cy.get("[data-cy=sign-in]").click();
    cy.location("pathname").should("equal", "/login");

    cy.get("[data-cy=username]").type(user.email);
    cy.get("[data-cy=password]").type(user.password);
    cy.get("[data-cy=login-form").submit();

    cy.get("[data-cy=profile]").should("be.visible");
    cy.location("pathname").should("equal", "/");

    cy.get("[data-cy=your-feed]");
    cy.contains("a.nav-link", "Your Feed").should(
      "have.class",
      "nav-link active"
    );
    cy.get("[data-cy=global-feed]").click();
    cy.contains("a.nav-link", "Global Feed").should(
      "have.class",
      "nav-link active"
    );
    cy.contains("a.nav-link", "Your Feed").should(
      "not.have.class",
      "nav-link active"
    );
  });
});
