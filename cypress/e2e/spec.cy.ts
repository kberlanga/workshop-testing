describe('workshop-testing', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should contain a menu', () => {
    cy.contains('Home')
    cy.contains('Users')
    cy.contains('Calculator')
  })

  it('should contain Home button', () => {
    cy.contains("Home").click();
    cy.url().should("include", "/home");
  })

  it('should create a new user', () => {
    cy.contains("Home").click();

    cy.get("#first_name").type("Juanito");
    cy.get("#last_name").type("Perez");

    cy.contains("Create user").click();
    cy.contains("Juanito")
  })
})