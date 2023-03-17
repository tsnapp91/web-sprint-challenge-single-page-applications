describe("form testing", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3002/pizza`);
  });

  const customerInput = () => cy.get("input[name=customer]");
  const sizeInput = () => cy.get("select[name=size]");
  const specialInput = () => cy.get("input[name=special]");
  const submitBtn = () => cy.get(`input[id="order-button"]`);
  const cheeseInput = () => cy.get(`input[name=cheese]`);

  it("checking for elements existence", () => {
    customerInput().should("exist");
    sizeInput().should("exist");
    specialInput().should("exist");
    submitBtn().should("exist");
    cheeseInput().should("exist");
  });
});
