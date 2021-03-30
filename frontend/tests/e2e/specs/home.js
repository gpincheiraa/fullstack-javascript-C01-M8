// https://docs.cypress.io/api/introduction/api.html

describe("Home page", () => {
  it("has the correct heading", () => {
    cy.visit("/");
    cy.contains("h1", "Bienvenido al curso fullstack Javascript");
  });

  it("has a link to create account", () => {
    cy.contains("a.nav-link", "Crear cuenta").click();
    cy.hash().should("equal", "/registro");
  });

  it("has a link to login", () => {
    cy.contains("a.nav-link", "Iniciar Sesión").click();
    cy.hash().should("equal", "/ingreso");
  });

  it("has visible buttons", () => {
    cy.visit("/ingreso");
    cy.get("button").should("be.visible");
  });
});
