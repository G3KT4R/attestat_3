describe("Login and add deposit", () => {
  it("test", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    cy.get("button").contains("Bank Manager Login").click();
    cy.get("button").contains("Home").click();
    cy.get("button").contains("Customer Login").click();
    cy.get("select").select("Albus Dumbledore");
    cy.get("button").contains("Login").click();
    cy.get("button").contains("Deposit").click();
    cy.get('input[placeholder="amount"]').type(100);
    cy.get('button[type="submit"]').click();
    cy.get("button").contains("Logout").click();
  });
});
