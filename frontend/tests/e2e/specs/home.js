// https://docs.cypress.io/api/introduction/api.html

describe("Primeros pasos en Cypress", () => {
  it("Visitar el landing page y probar título", () => {
    cy.visit("/");
    cy.contains("h1", "Bienvenido al curso de pruebas E2E con Cypress");
  });
  it("Seleccionar un link y probar el cambio en la url", () => {
    cy.contains("a.nav-link", "Sign up").click();
    cy.hash().should("equal", "#/register");
  });
  it("Probar visibilidad de un elemento por selector css", () => {
    cy.visit("/#/login");
    cy.get("button").should("be.visible");
  });
});
